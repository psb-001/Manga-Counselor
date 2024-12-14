import { ApiError } from './errors';
import { RateLimiter } from './rateLimiter';

const BASE_URL = 'https://api.jikan.moe/v4';
const rateLimiter = new RateLimiter(1000); // 1 request per second

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      errorData.message || `API Error: ${response.status} ${response.statusText}`
    );
  }
  
  const data = await response.json();
  return data?.data || [];
}

export async function apiGet<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  await rateLimiter.waitForNext();
  
  const queryString = new URLSearchParams(
    Object.entries(params).filter(([_, value]) => value !== '')
  ).toString();
  
  const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await fetch(url);
    return handleApiResponse<T>(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch data from the API');
  }
}