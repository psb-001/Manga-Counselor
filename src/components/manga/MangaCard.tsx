import React, { useState } from 'react';
import { Star, BookmarkPlus, Info } from 'lucide-react';
import { Manga } from '../../types/manga';
import { saveManga } from '../../utils/storage';

interface MangaCardProps {
  manga: Manga;
  onMoreInfo: (manga: Manga) => void;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga, onMoreInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-2 right-2 z-10 bg-black/70 px-2 py-1 rounded-full flex items-center">
        <Star className="w-3 h-3 text-yellow-400 mr-1" />
        <span className="text-xs text-white font-medium">{manga.score}</span>
      </div>
      
      <div className="aspect-[3/4] relative">
        <img 
          src={manga.images.jpg.large_image_url} 
          alt={manga.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/90 p-3 flex flex-col justify-between transition-opacity duration-300">
            <div>
              <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{manga.title}</h3>
              <p className="text-gray-300 text-xs line-clamp-3">{manga.synopsis}</p>
            </div>
            
            <div className="flex justify-center gap-2">
              <button
                onClick={() => saveManga(manga)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full"
                title="Save for later"
              >
                <BookmarkPlus className="w-4 h-4" />
              </button>
              <button
                onClick={() => onMoreInfo(manga)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                title="More info"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2">
        <h3 className="text-sm font-medium text-white line-clamp-1">{manga.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-400">
            {manga.chapters ? `${manga.chapters} ch.` : 'Ongoing'}
          </span>
          <span className="text-xs text-gray-400 capitalize">
            {manga.status.toLowerCase()}
          </span>
        </div>
      </div>
    </div>
  );
}