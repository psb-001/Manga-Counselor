import React from 'react';
import { BookHeart } from 'lucide-react';
import { SearchBar } from '../search/SearchBar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookHeart className="w-8 h-8 text-red-400" />
            <h1 className="text-2xl font-bold text-white">
              Manga<span className="text-red-400">Counselor</span>
            </h1>
          </div>
          
          <SearchBar />
        </div>
      </div>
    </header>
  );
}