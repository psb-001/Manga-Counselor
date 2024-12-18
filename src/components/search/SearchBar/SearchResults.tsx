import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Manga } from '../../../types/manga';
import { RecommendationSection } from '../recommendations/RecommendationSection';
import { useSearchRecommendations } from '../../../hooks/useSearchRecommendations';

interface SearchResultsProps {
  query: string;
  results: Manga[];
  onSelectManga: (manga: Manga) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  onSelectManga,
}) => {
  const recommendations = useSearchRecommendations(query);

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-sm 
      border border-zinc-800 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
      {/* Direct Search Results */}
      <div className="py-2">
        {results.map((manga) => (
          <button
            key={manga.mal_id}
            onClick={() => onSelectManga(manga)}
            className="w-full flex items-center gap-4 p-4 hover:bg-zinc-800/50 
              transition-colors text-left border-b border-zinc-800/50 last:border-0"
          >
            <div className="relative w-12 h-16 flex-shrink-0">
              <img
                src={manga.images.jpg.small_image_url || manga.images.jpg.image_url}
                alt={manga.title}
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
              {manga.score > 0 && (
                <div className="absolute -top-2 -right-2 bg-black/80 px-1.5 py-0.5 
                  rounded-full text-xs flex items-center shadow-lg">
                  <Star className="w-3 h-3 text-yellow-400 mr-0.5" />
                  <span className="text-white font-medium">{manga.score}</span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white truncate mb-1">
                {manga.title}
              </h4>
              <div className="flex items-center gap-3">
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

      {/* Recommendations Section */}
      <RecommendationSection
        recommendations={recommendations}
        onSelect={onSelectManga}
      />
    </div>
  );
};