import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Manga } from '../../../types/manga';

interface SearchSuggestionsProps {
  results: Manga[];
  onSelect: (manga: Manga) => void;
  isVisible: boolean;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  results,
  onSelect,
  isVisible
}) => {
  if (!isVisible || results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-zinc-900/95 backdrop-blur-sm 
      border border-zinc-800 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto animate-fadeIn">
      {results.slice(0, 5).map((manga) => (
        <button
          key={manga.mal_id}
          onClick={() => onSelect(manga)}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-zinc-800/50 
            transition-colors text-left"
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
                rounded-full text-xs flex items-center shadow-lg">
                <Star className="w-3 h-3 text-yellow-400 mr-0.5" />
                <span className="text-white font-medium">{manga.score}</span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-white truncate">
              {manga.title}
            </h4>
            <div className="flex items-center gap-3 mt-0.5">
              <div className="flex items-center gap-1 text-xs text-zinc-400">
                <BookOpen className="w-3 h-3" />
                <span>{manga.chapters ? `${manga.chapters} chapters` : 'Ongoing'}</span>
              </div>
              <span className="text-xs text-zinc-500 capitalize">
                {manga.status.toLowerCase()}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};