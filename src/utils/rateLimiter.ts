import { ApiError } from './errors';

export class RateLimiter {
  private queue: Array<{
    resolve: (value: unknown) => void;
    reject: (error: Error) => void;
    operation: () => Promise<unknown>;
  }> = [];
  private isProcessing = false;
  private lastRequestTime = 0;

  constructor(
    private delayMs: number,
    private maxRetries: number = 3,
    private backoffFactor: number = 1.5
  ) {}

  private async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.queue.length > 0) {
      const request = this.queue.shift();
      if (!request) continue;

      const { resolve, reject, operation } = request;
      
      try {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        
        if (timeSinceLastRequest < this.delayMs) {
          await new Promise(resolve => 
            setTimeout(resolve, this.delayMs - timeSinceLastRequest)
          );
        }
        
        this.lastRequestTime = Date.now();
        const result = await operation();
        resolve(result);
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    }
    
    this.isProcessing = false;
  }

  async executeWithRetry<T>(
    operation: () => Promise<T>,
    currentRetry: number = 0
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve: resolve as (value: unknown) => void,
        reject,
        operation: async () => {
          try {
            return await operation();
          } catch (error) {
            if (error instanceof ApiError && 
                error.status === 429 && 
                currentRetry < this.maxRetries) {
              const delay = this.delayMs * Math.pow(this.backoffFactor, currentRetry);
              await new Promise(resolve => setTimeout(resolve, delay));
              return this.executeWithRetry(operation, currentRetry + 1);
            }
            throw error;
          }
        }
      });

      if (!this.isProcessing) {
        this.processQueue();
      }
    });
  }
}