import React from 'react';
import { Manga } from '../../../types/manga';
import { MangaCard } from '../MangaCard';
import { LoadingCards } from '../../common/LoadingCards';

interface RecommendationGridProps {
  manga: Manga[];
  isLoading: boolean;
  onMoreInfo: (manga: Manga) => void;
}

export const RecommendationGrid: React.FC<RecommendationGridProps> = ({
  manga,
  isLoading,
  onMoreInfo,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <LoadingCards count={4} />
      </div>
    );
  }

  if (manga.length === 0) {
    return (
      <div className="text-center py-12 bg-zinc-900/50 rounded-lg border border-zinc-800">
        <p className="text-gray-400">
          Use the filters above to discover new manga recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {manga.slice(0, 4).map(manga => (
        <MangaCard
          key={manga.mal_id}
          manga={manga}
          onMoreInfo={onMoreInfo}
        />
      ))}
    </div>
  );
};