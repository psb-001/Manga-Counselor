import { useState, useEffect, useCallback, useRef } from 'react';
import { useDebounce } from './useDebounce';
import { mangaService } from '../services/mangaService';
import { Manga } from '../types/manga';
import { ApiError } from '../utils/errors';
import { sanitizeInput } from '../utils/security';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  
  const debouncedQuery = useDebounce(sanitizeInput(query), 300);

  const searchManga = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setResults([]);
      setError(null);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const newAbortController = new AbortController();
    abortControllerRef.current = newAbortController;

    setIsLoading(true);
    setError(null);

    try {
      const response = await mangaService.searchManga(searchQuery);
      if (!newAbortController.signal.aborted) {
        setResults(response.data);
      }
    } catch (error) {
      if (!newAbortController.signal.aborted) {
        const errorMessage = error instanceof ApiError 
          ? error.message 
          : 'Failed to search manga. Please try again.';
        setError(errorMessage);
        setResults([]);
      }
    } finally {
      if (!newAbortController.signal.aborted) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    searchManga(debouncedQuery);
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [debouncedQuery, searchManga]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return {
    query,
    results,
    isLoading,
    error,
    setQuery,
    clearSearch,
  };
};