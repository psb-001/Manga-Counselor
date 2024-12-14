import React from 'react';
import { MangaCard } from './MangaCard';
import { Manga } from '../types/manga';
import { LoadingCards } from './LoadingCards';

interface TrendingSectionProps {
  manga: Manga[];
  isLoading: boolean;
  onMoreInfo: (manga: Manga) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ 
  manga = [], // Provide default empty array
  isLoading,
  onMoreInfo 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <LoadingCards count={4} />
        ) : manga?.length > 0 ? ( // Add null check and length check
          manga.slice(0, 4).map(manga => (
            <MangaCard
              key={manga.mal_id}
              manga={manga}
              onMoreInfo={onMoreInfo}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No trending manga available</p>
        )}
      </div>
    </div>
  );
};