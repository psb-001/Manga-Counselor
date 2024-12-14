import React from 'react';
import { X } from 'lucide-react';
import { Manga } from '../types/manga';

interface MangaDetailsProps {
  manga: Manga;
  onClose: () => void;
}

export const MangaDetails: React.FC<MangaDetailsProps> = ({ manga, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{manga.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex gap-6 mb-6">
            <img
              src={manga.images.jpg.large_image_url}
              alt={manga.title}
              className="w-48 h-72 object-cover rounded-lg"
            />
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <p><strong>Status:</strong> {manga.status}</p>
                <p><strong>Chapters:</strong> {manga.chapters || 'Ongoing'}</p>
                <p><strong>Score:</strong> {manga.score}</p>
                <p><strong>Authors:</strong> {manga.authors.map(a => a.name).join(', ')}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {manga.genres.map(genre => (
                    <span
                      key={genre.name}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
            <p className="text-gray-700 leading-relaxed">{manga.synopsis}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Publication Information</h3>
            <p>
              <strong>Started:</strong> {new Date(manga.published.from).toLocaleDateString()}
            </p>
            <p>
              <strong>Ended:</strong> {
                manga.published.to 
                  ? new Date(manga.published.to).toLocaleDateString()
                  : 'Ongoing'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};