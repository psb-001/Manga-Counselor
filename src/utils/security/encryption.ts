/**
 * Simple XOR encryption implementation
 */

export const ENCRYPTION_KEY = 'manga-counselor-v1';

export function xorEncrypt(data: string): string {
  const textEncoder = new TextEncoder();
  const encodedData = textEncoder.encode(data);
  const encodedKey = textEncoder.encode(ENCRYPTION_KEY);
  
  const encrypted = new Uint8Array(encodedData.length);
  for (let i = 0; i < encodedData.length; i++) {
    encrypted[i] = encodedData[i] ^ encodedKey[i % encodedKey.length];
  }
  
  return Array.from(encrypted)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export function xorDecrypt(encrypted: string): string {
  try {
    const bytes = new Uint8Array(
      encrypted.match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []
    );
    const encodedKey = new TextEncoder().encode(ENCRYPTION_KEY);
    
    const decrypted = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      decrypted[i] = bytes[i] ^ encodedKey[i % encodedKey.length];
    }
    
    return new TextDecoder().decode(decrypted);
  } catch (error) {
    console.error('Decryption error:', error);
    return '[]';
  }
}