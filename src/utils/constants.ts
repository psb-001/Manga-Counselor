export const API_CONFIG = {
  BASE_URL: 'https://api.jikan.moe/v4',
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000,
    BACKOFF_FACTOR: 1.5
  },
  CACHE: {
    DURATION: 1000 * 60 * 60 // 1 hour
  }
} as const;

export const FORM_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;