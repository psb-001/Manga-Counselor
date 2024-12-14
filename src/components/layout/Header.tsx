import React from 'react';
import { Scroll } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scroll className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
              マンガ<span className="text-red-500">ハブ</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#trending" className="hover:text-red-500 transition-colors">Trending</a>
            <a href="#popular" className="hover:text-red-500 transition-colors">Popular</a>
            <a href="#recommendations" className="hover:text-red-500 transition-colors">For You</a>
          </nav>
        </div>
      </div>
    </header>
  );
}