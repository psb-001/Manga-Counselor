import React from 'react';
import { Sparkles } from 'lucide-react';
import { Manga } from '../../../types/manga';
import { MangaCard } from '../../manga/MangaCard';

interface RecommendationSectionProps {
  recommendations: Manga[];
  onSelect: (manga: Manga) => void;
}

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  recommendations,
  onSelect,
}) => {
  if (recommendations.length === 0) return null;

  return (
    <div className="border-t border-zinc-800/50 mt-2 pt-4">
      <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-400 mb-3">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        You might also like
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {recommendations.slice(0, 2).map((manga) => (
          <button
            key={manga.mal_id}
            onClick={() => onSelect(manga)}
            className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 
              transition-colors text-left group"
          >
            <img
              src={manga.images.jpg.small_image_url}
              alt={manga.title}
              className="w-12 h-16 object-cover rounded-md group-hover:scale-105 transition-transform"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white truncate group-hover:text-red-400 
                transition-colors">
                {manga.title}
              </h4>
              <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                {manga.synopsis}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};