import React, { useState, useEffect } from 'react';
import { getSavedManga, updateMangaProgress, removeManga } from '../../utils/storage';
import { SavedManga, Manga } from '../../types/manga';
import { Trash2, BookOpen, Info } from 'lucide-react';

interface ReadLaterListProps {
  onMangaSelect: (manga: Manga) => void;
}

export const ReadLaterList: React.FC<ReadLaterListProps> = ({ onMangaSelect }) => {
  const [savedManga, setSavedManga] = useState<SavedManga[]>([]);
  
  useEffect(() => {
    setSavedManga(getSavedManga());
  }, []);

  const handleProgressUpdate = (mangaId: number, chaptersRead: number) => {
    updateMangaProgress(mangaId, chaptersRead);
    setSavedManga(getSavedManga());
  };

  const handleRemove = (mangaId: number) => {
    removeManga(mangaId);
    setSavedManga(getSavedManga());
  };

  const totalChapters = savedManga.reduce((acc, manga) => acc + (manga.chapters || 0), 0);
  const totalRead = savedManga.reduce((acc, manga) => acc + manga.chaptersRead, 0);

  if (savedManga.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No saved manga yet</h3>
        <p className="text-gray-500">
          Save manga to your reading list by clicking the bookmark icon
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Reading Progress</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Chapters</p>
            <p className="text-2xl font-bold text-gray-900">{totalChapters}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Chapters Read</p>
            <p className="text-2xl font-bold text-gray-900">{totalRead}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Completion</p>
            <p className="text-2xl font-bold text-gray-900">
              {totalChapters ? Math.round((totalRead / totalChapters) * 100) : 0}%
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedManga.map(manga => (
          <div key={manga.mal_id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <img
                src={manga.images.jpg.large_image_url}
                alt={manga.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => onMangaSelect(manga)}
                  className="p-2 bg-white/90 text-gray-700 rounded-full hover:bg-white"
                  title="View details"
                >
                  <Info className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleRemove(manga.mal_id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  title="Remove from list"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-medium mb-2 line-clamp-1">{manga.title}</h4>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {manga.chaptersRead} / {manga.chapters || '?'} chapters
                </span>
              </div>
              
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={manga.chapters || 100}
                  value={manga.chaptersRead}
                  onChange={(e) => handleProgressUpdate(manga.mal_id, Number(e.target.value))}
                  className="w-full accent-red-500"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>{manga.chapters || 'Ongoing'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};