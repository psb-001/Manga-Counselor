/**
 * Utility functions for encoding/decoding data safely
 */

export function encodeData(data: string): string {
  return Buffer.from(data).toString('base64');
}

export function decodeData(encoded: string): string {
  try {
    return Buffer.from(encoded, 'base64').toString('utf8');
  } catch (error) {
    console.error('Decode error:', error);
    return '[]';
  }
}