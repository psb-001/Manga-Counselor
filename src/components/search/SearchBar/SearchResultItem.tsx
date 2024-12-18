import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Manga } from '../../../types/manga';

interface SearchResultItemProps {
  manga: Manga;
  onSelect: () => void;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({
  manga,
  onSelect,
}) => (
  <button
    onClick={onSelect}
    className="
      w-full flex items-center gap-4 p-4 
      hover:bg-zinc-800/50 transition-colors text-left 
      border-b border-zinc-800/50 last:border-0
    "
  >
    <MangaCover manga={manga} />
    <MangaInfo manga={manga} />
  </button>
);

const MangaCover: React.FC<{ manga: Manga }> = ({ manga }) => (
  <div className="relative w-12 h-16 flex-shrink-0">
    <img
      src={manga.images.jpg.small_image_url || manga.images.jpg.image_url}
      alt={manga.title}
      className="w-full h-full object-cover rounded-md"
      loading="lazy"
    />
    {manga.score > 0 && <ScoreBadge score={manga.score} />}
  </div>
);

const ScoreBadge: React.FC<{ score: number }> = ({ score }) => (
  <div className="
    absolute -top-2 -right-2 
    bg-black/80 px-1.5 py-0.5 rounded-full 
    text-xs flex items-center shadow-lg
  ">
    <Star className="w-3 h-3 text-yellow-400 mr-0.5" />
    <span className="text-white font-medium">{score}</span>
  </div>
);

const MangaInfo: React.FC<{ manga: Manga }> = ({ manga }) => (
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
);