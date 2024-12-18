import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { mangaService } from '../services/mangaService';
import { Manga } from '../types/manga';
import { ApiError } from '../utils/errors';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  
  const debouncedQuery = useDebounce(query, 300);

  const searchManga = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setResults([]);
      setError(null);
      return;
    }

    if (abortController) {
      abortController.abort();
    }

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

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
      if (abortController) {
        abortController.abort();
      }
    };
  }, [debouncedQuery, searchManga]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
    if (abortController) {
      abortController.abort();
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