import React from 'react';
import { createPortal } from 'react-dom';
import { X, Star, Calendar, BookOpen, Users } from 'lucide-react';
import { Manga } from '../../types/manga';

interface MangaDetailsProps {
  manga: Manga;
  onClose: () => void;
}

export const MangaDetails: React.FC<MangaDetailsProps> = ({ manga, onClose }) => {
  const content = (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-zinc-800">
        {/* Header */}
        <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm p-4 border-b border-zinc-800 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-white">{manga.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Cover Image */}
            <div className="w-full md:w-64 flex-shrink-0">
              <img
                src={manga.images.jpg.large_image_url}
                alt={manga.title}
                className="w-full aspect-[3/4] object-cover rounded-lg border border-zinc-800"
              />
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                  <Star className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <span className="text-sm text-zinc-400">Score</span>
                  <p className="text-lg font-bold text-white">{manga.score || 'N/A'}</p>
                </div>
                <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                  <BookOpen className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <span className="text-sm text-zinc-400">Chapters</span>
                  <p className="text-lg font-bold text-white">{manga.chapters || '?'}</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-6">
              {/* Status & Publication */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-1">Status</h3>
                  <p className="text-white capitalize">{manga.status.toLowerCase()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-1">Published</h3>
                  <p className="text-white">
                    {new Date(manga.published.from).getFullYear()}
                    {manga.published.to && ` - ${new Date(manga.published.to).getFullYear()}`}
                  </p>
                </div>
              </div>

              {/* Genres */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {manga.genres.map(genre => (
                    <span
                      key={genre.name}
                      className="px-3 py-1 bg-zinc-800/50 text-zinc-200 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Synopsis */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Synopsis</h3>
                <p className="text-zinc-300 leading-relaxed">{manga.synopsis}</p>
              </div>

              {/* Authors */}
              {manga.authors && manga.authors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Authors</h3>
                  <div className="flex flex-wrap gap-2">
                    {manga.authors.map(author => (
                      <span
                        key={author.name}
                        className="px-3 py-1 bg-zinc-800/50 text-zinc-200 rounded-full text-sm"
                      >
                        {author.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};