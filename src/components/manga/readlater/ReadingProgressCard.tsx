import React from 'react';
import { BookOpen, BarChart2 } from 'lucide-react';
import { SavedManga } from '../../../types/manga';

interface ReadingProgressCardProps {
  savedManga: SavedManga[];
}

export const ReadingProgressCard: React.FC<ReadingProgressCardProps> = ({ savedManga }) => {
  const totalChapters = savedManga.reduce((acc, manga) => acc + (manga.chapters || 0), 0);
  const totalRead = savedManga.reduce((acc, manga) => acc + manga.chaptersRead, 0);
  const completionRate = totalChapters ? Math.round((totalRead / totalChapters) * 100) : 0;

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <BarChart2 className="w-5 h-5 text-red-400" />
        Reading Progress
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <p className="text-sm text-gray-400">Total Chapters</p>
          </div>
          <p className="text-2xl font-bold text-white">{totalChapters}</p>
        </div>
        
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-400">Chapters Read</p>
          </div>
          <p className="text-2xl font-bold text-white">{totalRead}</p>
        </div>
        
        <div className="bg-black/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-gray-400">Completion</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-2xl font-bold text-white">{completionRate}%</p>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-400 rounded-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};