export class RateLimiter {
  private queue: Array<() => Promise<void>> = [];
  private isProcessing = false;
  private lastRequestTime = 0;

  constructor(
    private delayMs: number,
    private maxRetries: number = 3,
    private backoffFactor: number = 1.5
  ) {}

  async waitForNext(): Promise<void> {
    return new Promise((resolve) => {
      this.queue.push(async () => {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        
        if (timeSinceLastRequest < this.delayMs) {
          await new Promise(resolve => 
            setTimeout(resolve, this.delayMs - timeSinceLastRequest)
          );
        }
        
        this.lastRequestTime = Date.now();
        resolve();
      });

      if (!this.isProcessing) {
        this.processQueue();
      }
    });
  }

  private async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.queue.length > 0) {
      const request = this.queue.shift();
      if (request) {
        await request();
      }
    }
    
    this.isProcessing = false;
  }

  async executeWithRetry<T>(
    operation: () => Promise<T>,
    currentRetry: number = 0
  ): Promise<T> {
    try {
      await this.waitForNext();
      return await operation();
    } catch (error) {
      if (error instanceof Error && error.message.includes('429') && currentRetry < this.maxRetries) {
        const delay = this.delayMs * Math.pow(this.backoffFactor, currentRetry);
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.executeWithRetry(operation, currentRetry + 1);
      }
      throw error;
    }
  }
}