/**
 * Simple and reliable storage encoding/decoding
 */

export function encode(data: unknown): string {
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error('Encode error:', error);
    throw new Error('Failed to encode data');
  }
}

export function decode<T>(data: string): T {
  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error('Decode error:', error);
    throw new Error('Failed to decode data');
  }
}