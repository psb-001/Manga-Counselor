import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Manga } from '../../types/manga';

interface SearchResultsProps {
  results: Manga[];
  onSelectManga: (manga: Manga) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onSelectManga,
}) => (
  <div 
    className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 rounded-lg 
      shadow-xl overflow-hidden transform-gpu animate-fadeIn"
  >
    {results.map((manga) => (
      <button
        key={manga.mal_id}
        onClick={() => onSelectManga(manga)}
        className="w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 
          transition-colors text-left border-b border-zinc-800/50 last:border-0"
      >
        <div className="relative w-10 h-14 flex-shrink-0">
          <img
            src={manga.images.jpg.small_image_url || manga.images.jpg.image_url}
            alt={manga.title}
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
          {manga.score > 0 && (
            <div className="absolute -top-1 -right-1 bg-black/80 px-1 py-0.5 
              rounded text-xs flex items-center shadow-sm"
            >
              <Star className="w-3 h-3 text-yellow-400 mr-0.5" />
              <span className="text-white">{manga.score}</span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-white truncate">
            {manga.title}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <BookOpen className="w-3 h-3 text-zinc-400" />
            <p className="text-xs text-zinc-400 truncate">
              {manga.chapters ? `${manga.chapters} chapters` : 'Ongoing'} • {manga.status}
            </p>
          </div>
        </div>
      </button>
    ))}
  </div>
);