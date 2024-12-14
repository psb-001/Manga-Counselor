import React, { useState, useEffect } from 'react';
import { getSavedManga, updateMangaProgress, removeManga } from '../../utils/storage';
import { SavedManga } from '../../types/manga';
import { ReadingProgressCard } from './readlater/ReadingProgressCard';
import { MangaProgressCard } from './readlater/MangaProgressCard';
import { EmptyState } from './readlater/EmptyState';

interface ReadLaterListProps {
  onMangaSelect: (manga: SavedManga) => void;
}

export const ReadLaterList: React.FC<ReadLaterListProps> = ({ onMangaSelect }) => {
  const [savedManga, setSavedManga] = useState<SavedManga[]>([]);
  
  useEffect(() => {
    setSavedManga(getSavedManga());
  }, []);

  const handleProgressUpdate = (mangaId: number, chaptersRead: number) => {
    updateMangaProgress(mangaId, chaptersRead);
    setSavedManga(getSavedManga());
  };

  const handleRemove = (mangaId: number) => {
    removeManga(mangaId);
    setSavedManga(getSavedManga());
  };

  if (savedManga.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <ReadingProgressCard savedManga={savedManga} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedManga.map(manga => (
          <MangaProgressCard
            key={manga.mal_id}
            manga={manga}
            onProgressUpdate={handleProgressUpdate}
            onRemove={handleRemove}
            onMoreInfo={onMangaSelect}
          />
        ))}
      </div>
    </div>
  );
};