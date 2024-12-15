export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.jikan.moe/v4',
  RATE_LIMIT: {
    REQUESTS_PER_SECOND: 3,
    DELAY_MS: 1000,
    MAX_RETRIES: 3,
    BACKOFF_FACTOR: 1.5
  },
  CACHE: {
    DURATION_MS: 60 * 60 * 1000 // 1 hour
  }
} as const;