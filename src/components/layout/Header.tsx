import React from 'react';
import { Scroll } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-zinc-800 border-b border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scroll className="w-8 h-8 text-red-400" />
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
              マンガ<span className="text-red-400">ハブ</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}