import React from 'react';
import { Manga } from '../../../types/manga';
import { saveManga } from '../../../utils/storage';
import { useMangaCard } from './useMangaCard';
import { MangaCardImage } from './MangaCardImage';
import { MangaCardOverlay } from './MangaCardOverlay';
import { MangaCardFooter } from './MangaCardFooter';

interface MangaCardProps {
  manga: Manga;
  onMoreInfo: (manga: Manga) => void;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga, onMoreInfo }) => {
  const { isHovered, isSaved, setIsHovered, setIsSaved } = useMangaCard(manga.mal_id);

  const handleSave = () => {
    saveManga(manga);
    setIsSaved(true);
  };

  return (
    <div 
      className="relative group bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MangaCardImage
        imageUrl={manga.images.jpg.large_image_url}
        title={manga.title}
        score={manga.score}
        isSaved={isSaved}
      />
      
      {isHovered && (
        <MangaCardOverlay
          manga={manga}
          isSaved={isSaved}
          onSave={handleSave}
          onMoreInfo={onMoreInfo}
        />
      )}
      
      <MangaCardFooter
        title={manga.title}
        chapters={manga.chapters}
        status={manga.status}
      />
    </div>
  );
};