import { useState, useEffect } from 'react';
import { Manga } from '../../../types/manga';

interface UseSearchHandlersProps {
  searchRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  setQuery: (query: string) => void;
  clearSearch: () => void;
  onMangaSelect: (manga: Manga) => void;
}

export const useSearchHandlers = ({
  searchRef,
  inputRef,
  query,
  setQuery,
  clearSearch,
  onMangaSelect,
}: UseSearchHandlersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showFullResults, setShowFullResults] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    if (query.length >= 3) {
      setShowResults(true);
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleCollapse = () => {
    setTimeout(() => {
      if (!searchRef.current?.contains(document.activeElement)) {
        setIsExpanded(false);
        setShowResults(false);
      }
    }, 200);
  };

  const handleClear = () => {
    clearSearch();
    setShowResults(false);
    setShowFullResults(false);
    setIsExpanded(false);
    inputRef.current?.blur();
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (value.length >= 3) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    } else if (e.key === 'Enter' && query.length >= 3) {
      setShowFullResults(true);
      setShowResults(false);
    }
  };

  const handleSelectManga = (manga: Manga) => {
    onMangaSelect(manga);
    handleClear();
  };

  const handleBack = () => {
    setShowFullResults(false);
    setShowResults(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        if (!query) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [query]);

  return {
    isExpanded,
    showResults,
    showFullResults,
    handlers: {
      onExpand: handleExpand,
      onCollapse: handleCollapse,
      onClear: handleClear,
      onQueryChange: handleQueryChange,
      onKeyDown: handleKeyDown,
      handleSelectManga,
      handleBack,
    },
  };
};