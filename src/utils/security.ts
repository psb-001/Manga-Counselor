// Simple encryption for localStorage data
// In production, use a proper encryption library
const ENCRYPTION_KEY = 'manga-counselor-v1';

export function encryptData(data: string): string {
  try {
    const textEncoder = new TextEncoder();
    const encodedData = textEncoder.encode(data);
    const encodedKey = textEncoder.encode(ENCRYPTION_KEY);
    
    const encrypted = new Uint8Array(encodedData.length);
    for (let i = 0; i < encodedData.length; i++) {
      encrypted[i] = encodedData[i] ^ encodedKey[i % encodedKey.length];
    }
    
    return btoa(String.fromCharCode(...encrypted));
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

export function decryptData(encryptedData: string): string {
  try {
    const textEncoder = new TextEncoder();
    const encodedKey = textEncoder.encode(ENCRYPTION_KEY);
    
    const encrypted = new Uint8Array(
      atob(encryptedData).split('').map(c => c.charCodeAt(0))
    );
    
    const decrypted = new Uint8Array(encrypted.length);
    for (let i = 0; i < encrypted.length; i++) {
      decrypted[i] = encrypted[i] ^ encodedKey[i % encodedKey.length];
    }
    
    return new TextDecoder().decode(decrypted);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}