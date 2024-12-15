import React from 'react';
import { Star, Check } from 'lucide-react';

interface MangaCardImageProps {
  imageUrl: string;
  title: string;
  score: number;
  isSaved: boolean;
}

export const MangaCardImage: React.FC<MangaCardImageProps> = ({
  imageUrl,
  title,
  score,
  isSaved,
}) => (
  <div className="aspect-[3/4] relative">
    <img 
      src={imageUrl} 
      alt={title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    
    <div className="absolute top-2 right-2 z-10 flex gap-2">
      <div className="bg-black/70 px-2 py-1 rounded-full flex items-center">
        <Star className="w-3 h-3 text-yellow-400 mr-1" />
        <span className="text-xs text-white font-medium">{score}</span>
      </div>
      {isSaved && (
        <div className="bg-green-500/90 px-2 py-1 rounded-full flex items-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      )}
    </div>
  </div>
);