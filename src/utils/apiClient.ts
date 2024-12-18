import { API_CONFIG } from '../config/api.config';
import { ApiError } from './errors';
import { RateLimiter } from './rateLimiter';
import { ApiResponse } from '../types/manga';

const rateLimiter = new RateLimiter(
  API_CONFIG.RATE_LIMIT.DELAY_MS,
  API_CONFIG.RATE_LIMIT.MAX_RETRIES,
  API_CONFIG.RATE_LIMIT.BACKOFF_FACTOR
);

async function handleApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    if (response.status === 429) {
      throw new ApiError(429, 'Rate limit exceeded. Please try again in a moment.');
    }
    
    let errorMessage: string;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || `API Error: ${response.status} ${response.statusText}`;
    } catch {
      errorMessage = `API Error: ${response.status} ${response.statusText}`;
    }
    
    throw new ApiError(response.status, errorMessage);
  }
  
  const data = await response.json();
  return data as ApiResponse<T>;
}

export async function apiGet<T>(endpoint: string, params: Record<string, string> = {}): Promise<ApiResponse<T>> {
  const queryString = new URLSearchParams(
    Object.entries(params).filter(([_, value]) => value !== '')
  ).toString();
  
  const url = `${API_CONFIG.BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  return rateLimiter.executeWithRetry(async () => {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return handleApiResponse<T>(response);
    } catch (error) {
      // Network errors or other non-HTTP errors
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new ApiError(503, 'Network error. Please check your connection.');
      }
      // Re-throw API errors
      if (error instanceof ApiError) {
        throw error;
      }
      // Unknown errors
      throw new ApiError(500, 'An unexpected error occurred. Please try again.');
    }
  });
}