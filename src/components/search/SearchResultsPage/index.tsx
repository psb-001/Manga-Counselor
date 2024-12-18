import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Search, Loader } from 'lucide-react';
import { Manga } from '../../../types/manga';
import { SearchResultsGrid } from './SearchResultsGrid';
import { SearchFilters } from './SearchFilters';
import { NoResults } from './NoResults';

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
  const content = (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm overflow-y-auto" style={{ zIndex: 9999 }}>
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
            <SearchFilters />
          </div>

          {/* Results */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 text-red-400 animate-spin" />
              </div>
            ) : results.length > 0 ? (
              <SearchResultsGrid results={results} onMangaSelect={onMangaSelect} />
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