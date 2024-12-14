export class RateLimiter {
  private lastRequestTime: number = 0;

  constructor(private delayMs: number) {}

  async waitForNext(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.delayMs) {
      await new Promise(resolve => 
        setTimeout(resolve, this.delayMs - timeSinceLastRequest)
      );
    }
    
    this.lastRequestTime = Date.now();
  }
}