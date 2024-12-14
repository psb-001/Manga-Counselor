const BASE_URL = 'https://api.jikan.moe/v4';
const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests

let lastRequestTime = 0;

const waitForRateLimit = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
    await new Promise(resolve => 
      setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest)
    );
  }
  
  lastRequestTime = Date.now();
};

const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data?.data || [];
};

export const apiGet = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  await waitForRateLimit();
  
  const queryString = new URLSearchParams(
    Object.entries(params).filter(([_, value]) => value !== '')
  ).toString();
  
  const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await fetch(url);
    return handleApiResponse(response);
  } catch (error) {
    console.error('API request failed:', url, error);
    throw new Error('Failed to fetch data from the API');
  }
};