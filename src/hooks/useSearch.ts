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

    // Cancel previous request if it exists
    if (abortController) {
      abortController.abort();
    }

    // Create new abort controller for this request
    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    setIsLoading(true);
    try {
      const response = await mangaService.searchManga(searchQuery);
      // Only update results if this is still the current search
      if (!newAbortController.signal.aborted) {
        setResults(response.data.slice(0, 5));
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