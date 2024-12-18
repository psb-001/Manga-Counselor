import React, { useState, useRef } from 'react';
import { useSearchHandlers } from './useSearchHandlers';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { SearchResultsPage } from '../SearchResultsPage';
import { MangaDetails } from '../../manga/MangaDetails';
import { useSearch } from '../../../hooks/useSearch';
import { Manga } from '../../../types/manga';

export const SearchBar: React.FC = () => {
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

  const {
    isExpanded,
    showResults,
    showFullResults,
    handlers
  } = useSearchHandlers({
    searchRef,
    inputRef,
    query,
    setQuery,
    clearSearch,
    onMangaSelect: setSelectedManga
  });

  return (
    <>
      <div ref={searchRef} className="relative z-50">
        <SearchInput
          query={query}
          isExpanded={isExpanded}
          isLoading={isLoading}
          inputRef={inputRef}
          {...handlers}
        />

        {showResults && results.length > 0 && (
          <SearchResults
            results={results.slice(0, 5)}
            onSelectManga={handlers.handleSelectManga}
          />
        )}
      </div>

      {showFullResults && (
        <SearchResultsPage
          query={query}
          results={results}
          isLoading={isLoading}
          onBack={handlers.handleBack}
          onMangaSelect={handlers.handleSelectManga}
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