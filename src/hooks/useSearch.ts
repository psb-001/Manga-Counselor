import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { mangaService } from '../services/mangaService';
import { Manga } from '../types/manga';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  
  const debouncedQuery = useDebounce(query, 300);

  const searchManga = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setResults([]);
      return;
    }

    if (abortController) {
      abortController.abort();
    }

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    setIsLoading(true);
    try {
      const response = await mangaService.searchManga(searchQuery);
      if (!newAbortController.signal.aborted) {
        setResults(response.data);
      }
    } catch (error) {
      if (!newAbortController.signal.aborted) {
        console.error('Search failed:', error);
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
    if (abortController) {
      abortController.abort();
    }
  }, []);

  return {
    query,
    results,
    isLoading,
    setQuery,
    clearSearch,
  };
};