import React, { useState, useEffect } from 'react';
import { getSavedManga, updateMangaProgress, removeManga } from '../utils/storage';
import { SavedManga } from '../types/manga';
import { Trash2, BookOpen } from 'lucide-react';

export const ReadLaterList: React.FC = () => {
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

  return (
    <div className="p-6">
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Reading Progress</h3>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Chapters</p>
            <p className="text-2xl font-bold">{totalChapters}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Chapters Read</p>
            <p className="text-2xl font-bold">{totalRead}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Completion</p>
            <p className="text-2xl font-bold">
              {totalChapters ? Math.round((totalRead / totalChapters) * 100) : 0}%
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedManga.map(manga => (
          <div key={manga.mal_id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={manga.images.jpg.large_image_url}
                alt={manga.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleRemove(manga.mal_id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold mb-2">{manga.title}</h4>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {manga.chaptersRead} / {manga.chapters || '?'} chapters
                </span>
              </div>
              
              <div>
                <input
                  type="range"
                  min="0"
                  max={manga.chapters || 100}
                  value={manga.chaptersRead}
                  onChange={(e) => handleProgressUpdate(manga.mal_id, Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
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