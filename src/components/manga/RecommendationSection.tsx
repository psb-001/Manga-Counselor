import React from 'react';
import { Manga, Genre } from '../../types/manga';
import { MangaCard } from './MangaCard';
import { LoadingCards } from '../common/LoadingCards';
import { RecommendationFilters } from './RecommendationFilters';

interface RecommendationSectionProps {
  recommendations: Manga[];
  isLoading: boolean;
  filters: {
    genre: string;
    year: string;
    rating: string;
  };
  genres: Genre[];
  onFilterChange: (filters: any) => void;
  onSearch: () => void;
  onMoreInfo: (manga: Manga) => void;
}

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  recommendations,
  isLoading,
  filters,
  genres,
  onFilterChange,
  onSearch,
  onMoreInfo
}) => {
  return (
    <section id="recommendations" className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-800">
          Recommended For You
          <span className="text-sm text-gray-500 ml-2">おすすめ</span>
        </h2>
      </div>

      <RecommendationFilters
        filters={filters}
        genres={genres}
        onFilterChange={onFilterChange}
        onSearch={onSearch}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {isLoading ? (
          <LoadingCards count={5} />
        ) : recommendations.length > 0 ? (
          recommendations.map(manga => (
            <MangaCard
              key={manga.mal_id}
              manga={manga}
              onMoreInfo={onMoreInfo}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No recommendations found. Try adjusting your filters.
          </div>
        )}
      </div>
    </section>
  );
}