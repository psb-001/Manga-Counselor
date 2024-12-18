import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchSuggestions } from './SearchSuggestions';
import { useSearchBar } from './useSearchBar';
import { SearchResultsPage } from '../SearchResultsPage';
import { MangaDetails } from '../../manga/MangaDetails';
import { Manga } from '../../../types/manga';

export const SearchBar: React.FC = () => {
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  
  const {
    query,
    results,
    isLoading,
    isExpanded,
    showResults,
    showSuggestions,
    handlers
  } = useSearchBar();

  const handleMangaSelect = (manga: Manga) => {
    setSelectedManga(manga);
    handlers.onClear();
  };

  return (
    <div className="relative">
      <SearchInput
        query={query}
        isExpanded={isExpanded}
        isLoading={isLoading}
        {...handlers}
      />

      <SearchSuggestions
        results={results}
        onSelect={handleMangaSelect}
        isVisible={showSuggestions}
      />

      {showResults && (
        <SearchResultsPage
          query={query}
          results={results}
          isLoading={isLoading}
          onBack={handlers.onHideResults}
          onMangaSelect={handleMangaSelect}
        />
      )}

      {selectedManga && (
        <MangaDetails
          manga={selectedManga}
          onClose={() => setSelectedManga(null)}
        />
      )}
    </div>
  );
};