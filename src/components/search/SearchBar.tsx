import React, { useState, useRef } from 'react';
import { Search, X, Loader } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { Manga } from '../../types/manga';
import { MangaDetails } from '../manga/MangaDetails';
import { SearchResultsPage } from './SearchResultsPage';

export const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const {
    query,
    results,
    isLoading,
    setQuery,
    clearSearch
  } = useSearch();

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 50);
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
    setSelectedManga(null);
    inputRef.current?.blur();
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
    setSelectedManga(manga);
  };

  const handleBack = () => {
    setShowResults(false);
    setSelectedManga(null);
  };

  return (
    <>
      <div ref={searchRef} className="relative z-50">
        <div className={`
          flex items-center bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 
          rounded-full overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? 'w-[300px]' : 'w-10 hover:w-[300px] hover:border-zinc-600'}
        `}>
          <button
            onClick={handleExpand}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onFocus={handleExpand}
            onBlur={handleCollapse}
            onKeyDown={handleKeyDown}
            placeholder="Search manga..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 text-sm px-2"
          />
          
          {(isLoading || query) && (
            <button
              onClick={handleClear}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isLoading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <X className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {showResults && (
        <SearchResultsPage
          query={query}
          results={results}
          isLoading={isLoading}
          onBack={handleBack}
          onMangaSelect={handleSelectManga}
        />
      )}

      {selectedManga && (
        <MangaDetails
          manga={selectedManga}
          onClose={() => setSelectedManga(null)}
        />
      )}
    </>
  );
};