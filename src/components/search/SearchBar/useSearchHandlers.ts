import { useState } from 'react';
import { Manga } from '../../../types/manga';

interface UseSearchHandlersProps {
  query: string;
  setQuery: (query: string) => void;
  clearSearch: () => void;
  onShowResults: () => void;
  onHideResults: () => void;
}

export const useSearchHandlers = ({
  query,
  setQuery,
  clearSearch,
  onShowResults,
  onHideResults,
}: UseSearchHandlersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    onHideResults();
    setIsExpanded(false);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    } else if (e.key === 'Enter' && query.length >= 3) {
      onShowResults();
    }
  };

  return {
    isExpanded,
    handlers: {
      onExpand: handleExpand,
      onCollapse: handleCollapse,
      onClear: handleClear,
      onQueryChange: handleQueryChange,
      onKeyDown: handleKeyDown,
    },
  };
};