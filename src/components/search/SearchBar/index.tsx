import React, { useState } from 'react';
import { useSearchHandlers } from './useSearchHandlers';
import { SearchInput } from './SearchInput';
import { SearchResultsPage } from '../SearchResultsPage';
import { MangaDetails } from '../../manga/MangaDetails';
import { useSearch } from '../../../hooks/useSearch';
import { Manga } from '../../../types/manga';

export const SearchBar: React.FC = () => {
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  
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
    handlers
  } = useSearchHandlers({
    query,
    setQuery,
    clearSearch,
    onMangaSelect: setSelectedManga
  });

  return (
    <>
      <SearchInput
        query={query}
        isExpanded={isExpanded}
        isLoading={isLoading}
        {...handlers}
      />

      {showResults && (
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