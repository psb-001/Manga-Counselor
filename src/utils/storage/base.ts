import { StorageOptions, StorageError } from './types';
import { encode, decode } from './encoding';

export class Storage {
  private key: string;
  private maxItems: number;

  constructor(options: StorageOptions) {
    this.key = options.key;
    this.maxItems = options.maxItems || 1000;
  }

  protected getData<T>(): T | null {
    try {
      const stored = localStorage.getItem(this.key);
      if (!stored) return null;

      const decoded = decode(stored);
      return decoded as T;
    } catch (error) {
      console.error('Storage read error:', error);
      localStorage.removeItem(this.key);
      return null;
    }
  }

  protected setData<T>(data: T): void {
    try {
      const encoded = encode(data);
      localStorage.setItem(this.key, encoded);
    } catch (error) {
      console.error('Storage write error:', error);
      throw new StorageError('WRITE_ERROR');
    }
  }

  protected removeData(): void {
    localStorage.removeItem(this.key);
  }

  protected checkLimit(currentCount: number): void {
    if (currentCount >= this.maxItems) {
      throw new StorageError('STORAGE_LIMIT_EXCEEDED');
    }
  }
}