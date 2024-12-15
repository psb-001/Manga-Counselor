import React from 'react';
import { Manga } from '../../../types/manga';
import { MangaCard } from '../MangaCard';
import { LoadingCards } from '../../common/LoadingCards';

interface MangaGridProps {
  manga: Manga[];
  isLoading: boolean;
  onMoreInfo: (manga: Manga) => void;
}

export const MangaGrid: React.FC<MangaGridProps> = ({
  manga,
  isLoading,
  onMoreInfo
}) => {
  if (isLoading && manga.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <LoadingCards count={24} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {manga.map(manga => (
        <MangaCard
          key={manga.mal_id}
          manga={manga}
          onMoreInfo={onMoreInfo}
        />
      ))}
      {isLoading && (
        <LoadingCards count={6} />
      )}
    </div>
  );
};