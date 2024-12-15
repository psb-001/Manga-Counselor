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
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      errorData.message || `API Error: ${response.status} ${response.statusText}`
    );
  }
  
  const data = await response.json();
  return data as ApiResponse<T>;
}

export async function apiGet<T>(endpoint: string, params: Record<string, string> = {}): Promise<ApiResponse<T>> {
  const queryString = new URLSearchParams(
    Object.entries(params).filter(([_, value]) => value !== '')
  ).toString();
  
  const url = `${API_CONFIG.BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  // Add API key if it exists in environment variables
  const apiKey = import.meta.env.VITE_API_KEY;
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }
  
  return rateLimiter.executeWithRetry(async () => {
    try {
      const response = await fetch(url, { headers });
      return handleApiResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Failed to fetch data from the API');
    }
  });
}