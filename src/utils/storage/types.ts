export interface StorageOptions {
  key: string;
  maxItems?: number;
}

export interface StorageError extends Error {
  code: string;
  data?: unknown;
}