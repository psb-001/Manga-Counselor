import { ENCRYPTION_KEY } from './security/encryption';

// Use Base64 encoding/decoding that supports UTF-8
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = window.atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function encryptData(data: string): string {
  try {
    // Convert the string to UTF-8 bytes
    const textEncoder = new TextEncoder();
    const encodedData = textEncoder.encode(data);
    const encodedKey = textEncoder.encode(ENCRYPTION_KEY);
    
    // XOR encryption
    const encrypted = new Uint8Array(encodedData.length);
    for (let i = 0; i < encodedData.length; i++) {
      encrypted[i] = encodedData[i] ^ encodedKey[i % encodedKey.length];
    }
    
    // Convert to Base64
    return uint8ArrayToBase64(encrypted);
  } catch (error) {
    console.error('Encryption error:', error);
    // Return a safe fallback
    return btoa(encodeURIComponent(data));
  }
}

export function decryptData(encryptedData: string): string {
  try {
    // Convert from Base64
    const encrypted = base64ToUint8Array(encryptedData);
    const encodedKey = new TextEncoder().encode(ENCRYPTION_KEY);
    
    // XOR decryption
    const decrypted = new Uint8Array(encrypted.length);
    for (let i = 0; i < encrypted.length; i++) {
      decrypted[i] = encrypted[i] ^ encodedKey[i % encodedKey.length];
    }
    
    // Convert back to string
    return new TextDecoder().decode(decrypted);
  } catch (error) {
    console.error('Decryption error:', error);
    // Try fallback decryption
    try {
      return decodeURIComponent(atob(encryptedData));
    } catch {
      // If all decryption fails, return empty array string to prevent app crashes
      return '[]';
    }
  }
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}