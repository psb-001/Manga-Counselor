import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Search, Loader } from 'lucide-react';
import { Manga } from '../../../types/manga';
import { SearchResultsGrid } from './SearchResultsGrid';
import { SearchFiltersPanel } from './SearchFilters';
import { NoResults } from './NoResults';
import { useSearchFilters } from '../../../hooks/useSearchFilters';

interface SearchResultsPageProps {
  query: string;
  results: Manga[];
  isLoading: boolean;
  onBack: () => void;
  onMangaSelect: (manga: Manga) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  query,
  results,
  isLoading,
  onBack,
  onMangaSelect,
}) => {
  const {
    filters,
    updateFilter,
    resetFilters,
    applyFilters
  } = useSearchFilters();

  const filteredResults = useMemo(() => {
    return applyFilters(results);
  }, [results, applyFilters]);

  const handleMangaSelect = (manga: Manga) => {
    onMangaSelect(manga);
  };

  const content = (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm overflow-y-auto z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-zinc-500" />
            <h1 className="text-xl font-medium text-white">
              Search results for "{query}"
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <SearchFiltersPanel
              filters={filters}
              onFilterChange={updateFilter}
              onReset={resetFilters}
            />
          </div>

          {/* Results */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 text-red-400 animate-spin" />
              </div>
            ) : filteredResults.length > 0 ? (
              <>
                <p className="text-sm text-zinc-400 mb-4">
                  Showing {filteredResults.length} of {results.length} results
                </p>
                <SearchResultsGrid
                  results={filteredResults}
                  onMangaSelect={handleMangaSelect}
                />
              </>
            ) : (
              <NoResults query={query} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};