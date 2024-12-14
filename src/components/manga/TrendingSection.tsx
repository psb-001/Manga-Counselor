import React from 'react';
import { Manga } from '../../types/manga';
import { MangaCard } from './MangaCard';
import { LoadingCards } from '../common/LoadingCards';

interface TrendingSectionProps {
  manga: Manga[];
  isLoading: boolean;
  onMoreInfo: (manga: Manga) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  manga,
  isLoading,
  onMoreInfo
}) => {
  return (
    <section id="trending" className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-800">
          Trending Now
          <span className="text-sm text-gray-500 ml-2">トレンド</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {isLoading ? (
          <LoadingCards count={4} />
        ) : (
          manga.slice(0, 4).map(manga => (
            <MangaCard
              key={manga.mal_id}
              manga={manga}
              onMoreInfo={onMoreInfo}
            />
          ))
        )}
      </div>
    </section>
  );
}