export interface StorageOptions {
  key: string;
  maxItems?: number;
}

export class StorageError extends Error {
  constructor(
    public code: 'WRITE_ERROR' | 'READ_ERROR' | 'STORAGE_LIMIT_EXCEEDED',
    options?: ErrorOptions
  ) {
    super(`Storage error: ${code}`, options);
    this.name = 'StorageError';
  }
}