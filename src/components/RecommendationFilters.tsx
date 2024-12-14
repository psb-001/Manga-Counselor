import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { Genre } from '../types/manga';
import { FilterSelect } from './filters/FilterSelect';
import { YEARS, RATINGS } from '../constants/filterOptions';

interface Filters {
  genre: string;
  year: string;
  rating: string;
}

interface RecommendationFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  genres: Genre[];
  onSearch: () => void;
  onRefresh: () => void;
  showRefresh: boolean;
}

export const RecommendationFilters: React.FC<RecommendationFiltersProps> = ({
  filters,
  onFilterChange,
  genres,
  onSearch,
  onRefresh,
  showRefresh,
}) => {
  // Transform genres to match the FilterSelect option format
  // Sort genres by name for better user experience
  const genreOptions = genres
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(genre => ({
      id: `genre-${genre.mal_id}`, // Simplified unique key
      value: genre.mal_id.toString(),
      label: genre.name
    }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <FilterSelect
          value={filters.genre}
          onChange={(value) => onFilterChange({ ...filters, genre: value })}
          options={genreOptions}
          placeholder="Select Genre"
        />
        
        <FilterSelect
          value={filters.year}
          onChange={(value) => onFilterChange({ ...filters, year: value })}
          options={YEARS}
          placeholder="Select Year"
        />
        
        <FilterSelect
          value={filters.rating}
          onChange={(value) => onFilterChange({ ...filters, rating: value })}
          options={RATINGS}
          placeholder="Select Rating"
        />
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Get Recommendations
        </button>
        
        {showRefresh && (
          <button
            onClick={onRefresh}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        )}
      </div>
    </div>
  );
};