import React, { useState } from 'react';
import { Star, BookmarkPlus, Info } from 'lucide-react';
import { Manga } from '../types/manga';
import { saveManga } from '../utils/storage';

interface MangaCardProps {
  manga: Manga;
  onMoreInfo: (manga: Manga) => void;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga, onMoreInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-2 right-2 z-10 bg-white/90 px-2 py-1 rounded-full flex items-center">
        <Star className="w-4 h-4 text-yellow-500 mr-1" />
        <span className="text-sm font-semibold">{manga.score}</span>
      </div>
      
      <img 
        src={manga.images.jpg.large_image_url} 
        alt={manga.title}
        className="w-full h-full object-cover"
      />

      {isHovered && (
        <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-between transition-opacity duration-300">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{manga.title}</h3>
            <p className="text-white text-sm line-clamp-4">{manga.synopsis}</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => saveManga(manga)}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center"
            >
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save
            </button>
            <button
              onClick={() => onMoreInfo(manga)}
              className="bg-white text-black px-4 py-2 rounded-full flex items-center"
            >
              <Info className="w-4 h-4 mr-2" />
              More Info
            </button>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            {manga.chapters ? `${manga.chapters} chapters` : 'Ongoing'}
          </span>
          <span className="text-sm font-medium capitalize">
            {manga.status.toLowerCase()}
          </span>
        </div>
      </div>
    </div>
  );
};