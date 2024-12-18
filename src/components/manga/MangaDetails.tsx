import React from 'react';
import { createPortal } from 'react-dom';
import { X, Star, Calendar, BookOpen } from 'lucide-react';
import { Manga } from '../../types/manga';

interface MangaDetailsProps {
  manga: Manga;
  onClose: () => void;
}

export const MangaDetails: React.FC<MangaDetailsProps> = ({ manga, onClose }) => {
  const content = (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center" style={{ zIndex: 9999 }}>
      <div className="bg-zinc-900 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-zinc-800">
        {/* Rest of the component content remains the same */}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};