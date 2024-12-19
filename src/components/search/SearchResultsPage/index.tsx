import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Search, Loader } from 'lucide-react';
import { Manga } from '../../../types/manga';
import { SearchResultsList } from './SearchResultsList';
import { SearchFiltersPanel } from './SearchFilters';
import { useSearchFilters } from '../../../hooks/useSearchFilters';
import { SearchInput } from '../SearchBar/SearchInput';

interface SearchResultsPageProps {
  query: string;
  results: Manga[];
  isLoading: boolean;
  onBack: () => void;
  onMangaSelect: (manga: Manga) => void;
  searchBarProps: any; // Using any for brevity, should be properly typed
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  query,
  results,
  isLoading,
  onBack,
  onMangaSelect,
  searchBarProps
}) => {
  const {
    filters,
    updateFilter,
    resetFilters,
    applyFilters
  } = useSearchFilters();

  const filteredResults = React.useMemo(() => {
    return applyFilters(results);
  }, [results, applyFilters]);

  const content = (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm overflow-y-auto z-40">
      <div className="max-w-[90rem] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <div className="flex-1 max-w-md">
            <SearchInput {...searchBarProps} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
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
            ) : (
              <SearchResultsList
                results={filteredResults}
                query={query}
                onMangaSelect={onMangaSelect}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};