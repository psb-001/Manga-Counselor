import { StorageOptions, StorageError } from './types';
import { encodeData, decodeData } from '../security/encoding';
import { xorEncrypt, xorDecrypt } from '../security/encryption';
import { validateJSON } from '../security/sanitization';

export class Storage {
  private key: string;
  private maxItems: number;

  constructor(options: StorageOptions) {
    this.key = options.key;
    this.maxItems = options.maxItems || 1000;
  }

  protected getData<T>(): T | null {
    try {
      const encrypted = localStorage.getItem(this.key);
      if (!encrypted) return null;

      // First try XOR decryption
      const decrypted = xorDecrypt(encrypted);
      if (validateJSON(decrypted)) {
        return JSON.parse(decrypted);
      }

      // Fallback to base64 decoding
      const decoded = decodeData(encrypted);
      if (validateJSON(decoded)) {
        return JSON.parse(decoded);
      }

      throw new Error('Invalid data format');
    } catch (error) {
      console.error('Storage read error:', error);
      localStorage.removeItem(this.key);
      return null;
    }
  }

  protected setData<T>(data: T): void {
    try {
      const jsonString = JSON.stringify(data);
      
      // Try XOR encryption first
      try {
        const encrypted = xorEncrypt(jsonString);
        localStorage.setItem(this.key, encrypted);
        return;
      } catch (error) {
        console.warn('XOR encryption failed, falling back to base64:', error);
      }

      // Fallback to base64 encoding
      const encoded = encodeData(jsonString);
      localStorage.setItem(this.key, encoded);
    } catch (error) {
      console.error('Storage write error:', error);
      throw new StorageError('WRITE_ERROR', { cause: error });
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