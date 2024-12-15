import { useState, useEffect } from 'react';
import { getSavedManga } from '../../../utils/storage';

export const useMangaCard = (mangaId: number) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedManga = getSavedManga();
    setIsSaved(savedManga.some(m => m.mal_id === mangaId));
  }, [mangaId]);

  return {
    isHovered,
    isSaved,
    setIsHovered,
    setIsSaved,
  };
};