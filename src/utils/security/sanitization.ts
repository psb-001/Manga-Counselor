/**
 * Input sanitization utilities
 */

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

export function validateJSON(data: string): boolean {
  try {
    const parsed = JSON.parse(data);
    return typeof parsed === 'object';
  } catch {
    return false;
  }
}