import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Manga } from '../../types/manga';
import { RecommendationFilters } from '../../types/filters';
import { FilterSection } from './discover/FilterSection';
import { RecommendationGrid } from './discover/RecommendationGrid';

interface DiscoverSectionProps {
  manga: Manga[];
  genres: Array<{ mal_id: number; name: string }>;
  isLoading: boolean;
  onSearch: (filters: RecommendationFilters, isRefresh?: boolean) => void;
  onMoreInfo: (manga: Manga) => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  manga,
  genres,
  isLoading,
  onSearch,
  onMoreInfo,
}) => {
  const [filters, setFilters] = useState<RecommendationFilters>({
    genre: '',
    year: '',
    rating: '',
  });

  const handleSearch = () => {
    onSearch(filters, false);
  };

  const handleRefresh = () => {
    onSearch(filters, true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">
          Discover New Manga
          <span className="text-sm text-gray-500 ml-2 japanese-text">新しい発見</span>
        </h2>

        <FilterSection
          filters={filters}
          genres={genres}
          onFilterChange={setFilters}
        />

        <div className="flex justify-between items-center">
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Find Manga
          </button>
          {manga.length > 0 && (
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          )}
        </div>
      </div>

      <RecommendationGrid
        manga={manga}
        isLoading={isLoading}
        onMoreInfo={onMoreInfo}
      />
    </div>
  );
};