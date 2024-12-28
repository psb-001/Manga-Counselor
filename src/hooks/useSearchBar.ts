import { useState, useRef, useCallback } from 'react';
import { useSearch } from './useSearch';

export const useSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const {
    query,
    results,
    isLoading,
    setQuery,
    clearSearch
  } = useSearch();

  const handleExpand = useCallback(() => {
    setIsExpanded(true);
    setShowSuggestions(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleCollapse = useCallback(() => {
    if (!query) {
      setIsExpanded(false);
    }
    setTimeout(() => setShowSuggestions(false), 200);
  }, [query]);

  const handleClear = useCallback(() => {
    clearSearch();
    setShowResults(false);
    setShowSuggestions(false);
    setIsExpanded(false);
    inputRef.current?.blur();
  }, [clearSearch]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    } else if (e.key === 'Enter' && query.length >= 3) {
      setShowResults(true);
      setShowSuggestions(false);
    }
  }, [query, handleClear]);

  return {
    query,
    results,
    isLoading,
    isExpanded,
    showResults,
    showSuggestions,
    inputRef,
    setQuery,
    handlers: {
      onExpand: handleExpand,
      onCollapse: handleCollapse,
      onClear: handleClear,
      onKeyDown: handleKeyDown,
      onHideResults: useCallback(() => setShowResults(false), []),
      onHideSuggestions: useCallback(() => setShowSuggestions(false), [])
    }
  };
};