import React from 'react';
import { BookmarkPlus, Info, Check } from 'lucide-react';
import { Manga } from '../../../types/manga';

interface MangaCardOverlayProps {
  manga: Manga;
  isSaved: boolean;
  onSave: () => void;
  onMoreInfo: (manga: Manga) => void;
}

export const MangaCardOverlay: React.FC<MangaCardOverlayProps> = ({
  manga,
  isSaved,
  onSave,
  onMoreInfo,
}) => (
  <div className="absolute inset-0 bg-black/90 p-3 flex flex-col justify-between transition-opacity duration-300">
    <div>
      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{manga.title}</h3>
      <p className="text-gray-300 text-xs line-clamp-3">{manga.synopsis}</p>
    </div>
    
    <div className="flex justify-center gap-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSave();
        }}
        disabled={isSaved}
        className={`p-2 rounded-full transition-colors ${
          isSaved 
            ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white'
        }`}
        title={isSaved ? 'Already saved' : 'Save for later'}
      >
        {isSaved ? <Check className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMoreInfo(manga);
        }}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
        title="More info"
      >
        <Info className="w-4 h-4" />
      </button>
    </div>
  </div>
);