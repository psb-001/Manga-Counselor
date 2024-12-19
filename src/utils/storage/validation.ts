/**
 * Storage data validation utilities
 */

export function isValidData(data: unknown): boolean {
  return data !== null && typeof data === 'object';
}

export function isValidArray(data: unknown): boolean {
  return Array.isArray(data);
}

export function sanitizeArray<T>(data: unknown, fallback: T[] = []): T[] {
  return isValidArray(data) ? data as T[] : fallback;
}