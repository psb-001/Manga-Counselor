import React from 'react';
import { Trash2, BookOpen, Info, Star } from 'lucide-react';
import { SavedManga } from '../../../types/manga';

interface MangaProgressCardProps {
  manga: SavedManga;
  onProgressUpdate: (mangaId: number, chaptersRead: number) => void;
  onRemove: (mangaId: number) => void;
  onMoreInfo: (manga: SavedManga) => void;
}

export const MangaProgressCard: React.FC<MangaProgressCardProps> = ({
  manga,
  onProgressUpdate,
  onRemove,
  onMoreInfo,
}) => {
  const progress = manga.chapters ? (manga.chaptersRead / manga.chapters) * 100 : 0;
  
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/9]">
        <img
          src={manga.images.jpg.large_image_url}
          alt={manga.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="flex items-center gap-1 bg-black/80 text-yellow-400 px-2 py-1 rounded-full text-sm">
            <Star className="w-3 h-3" />
            <span>{manga.score}</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-lg font-bold text-white mb-1 line-clamp-1">{manga.title}</h4>
          <div className="flex items-center gap-2 text-gray-300">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">
              {manga.chaptersRead} / {manga.chapters || '?'} chapters
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max={manga.chapters || 100}
            value={manga.chaptersRead}
            onChange={(e) => onProgressUpdate(manga.mal_id, Number(e.target.value))}
            className="w-full accent-red-500 bg-transparent"
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onMoreInfo(manga)}
            className="p-2 text-gray-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            title="View details"
          >
            <Info className="w-4 h-4" />
          </button>
          <button
            onClick={() => onRemove(manga.mal_id)}
            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
            title="Remove from list"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};