import React, { useState } from 'react';
import { useSearchHandlers } from './useSearchHandlers';
import { SearchInput } from './SearchInput';
import { SearchResultsPage } from '../SearchResultsPage';
import { MangaDetails } from '../../manga/MangaDetails';
import { useSearch } from '../../../hooks/useSearch';
import { Manga } from '../../../types/manga';

export const SearchBar: React.FC = () => {
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const {
    query,
    results,
    isLoading,
    setQuery,
    clearSearch
  } = useSearch();

  const {
    isExpanded,
    handlers
  } = useSearchHandlers({
    query,
    setQuery,
    clearSearch,
    onShowResults: () => setShowResults(true),
    onHideResults: () => setShowResults(false)
  });

  const handleMangaSelect = (manga: Manga) => {
    setSelectedManga(manga);
    // Keep the search results visible
  };

  const handleCloseDetails = () => {
    setSelectedManga(null);
    // Keep the search results visible
  };

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
          onBack={() => setShowResults(false)}
          onMangaSelect={handleMangaSelect}
        />
      )}

      {selectedManga && (
        <MangaDetails
          manga={selectedManga}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};