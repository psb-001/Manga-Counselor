import React from 'react';
import { Genre } from '../../types/manga';
import { FilterSelect } from '../common/FilterSelect';
import { YEARS, RATINGS } from '../../constants/filterOptions';

interface RecommendationFiltersProps {
  filters: {
    genre: string;
    year: string;
    rating: string;
  };
  genres: Genre[];
  onFilterChange: (filters: any) => void;
  onSearch: () => void;
}

export const RecommendationFilters: React.FC<RecommendationFiltersProps> = ({
  filters,
  genres,
  onFilterChange,
  onSearch,
}) => {
  const genreOptions = genres
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(genre => ({
      id: `genre-${genre.mal_id}`,
      value: genre.mal_id.toString(),
      label: genre.name
    }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
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
      
      <button
        onClick={onSearch}
        className="w-full md:w-auto px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Get Recommendations
      </button>
    </div>
  );
}