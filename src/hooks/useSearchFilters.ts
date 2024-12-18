import { useState, useCallback } from 'react';
import { SearchFilters } from '../types/search';

const initialFilters: SearchFilters = {
  status: '',
  type: '',
  minScore: 0
};

export const useSearchFilters = () => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  const updateFilter = useCallback((key: keyof SearchFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const applyFilters = useCallback((results: any[]) => {
    return results.filter(manga => {
      // Status filter
      if (filters.status && manga.status.toLowerCase() !== filters.status.toLowerCase()) {
        return false;
      }

      // Type filter
      if (filters.type && manga.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }

      // Score filter
      if (filters.minScore > 0 && (!manga.score || manga.score < filters.minScore)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    applyFilters
  };
};