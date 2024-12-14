import { useState } from 'react';

interface ApiState<T> {
  data: T;
  error: string | null;
  isLoading: boolean;
}

interface UseApiOptions {
  onError?: (error: Error) => void;
  retryCount?: number;
  retryDelay?: number;
}

export function useApi<T>(
  initialData: T,
  options: UseApiOptions = {}
) {
  const [state, setState] = useState<ApiState<T>>({
    data: initialData,
    error: null,
    isLoading: false,
  });

  const { retryCount = 3, retryDelay = 1000 } = options;

  const execute = async (
    apiCall: () => Promise<T>,
    transform?: (data: T) => T
  ) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    let attempts = 0;
    while (attempts < retryCount) {
      try {
        const response = await apiCall();
        const transformedData = transform ? transform(response) : response;
        setState({ data: transformedData, error: null, isLoading: false });
        return transformedData;
      } catch (error) {
        attempts++;
        if (attempts === retryCount) {
          const errorMessage = error instanceof Error ? error.message : 'An error occurred';
          setState({ data: initialData, error: errorMessage, isLoading: false });
          if (options.onError) {
            options.onError(error instanceof Error ? error : new Error(errorMessage));
          }
        } else {
          await new Promise(resolve => setTimeout(resolve, retryDelay));
        }
      }
    }
    return initialData;
  };

  return { ...state, execute };
}