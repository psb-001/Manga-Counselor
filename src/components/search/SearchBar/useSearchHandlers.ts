import { useState } from 'react';
import { Manga } from '../../../types/manga';

interface UseSearchHandlersProps {
  query: string;
  setQuery: (query: string) => void;
  clearSearch: () => void;
  onMangaSelect: (manga: Manga) => void;
}

export const useSearchHandlers = ({
  query,
  setQuery,
  clearSearch,
  onMangaSelect,
}: UseSearchHandlersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    if (!query) {
      setIsExpanded(false);
    }
  };

  const handleClear = () => {
    clearSearch();
    setShowResults(false);
    setIsExpanded(false);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    } else if (e.key === 'Enter' && query.length >= 3) {
      setShowResults(true);
    }
  };

  const handleSelectManga = (manga: Manga) => {
    onMangaSelect(manga);
    setShowResults(false);
  };

  const handleBack = () => {
    setShowResults(false);
  };

  return {
    isExpanded,
    showResults,
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