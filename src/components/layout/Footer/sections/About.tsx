import React from 'react';
import { Scroll } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Scroll className="w-6 h-6 text-red-400" />
        </div>
        <h3 className="text-xl font-bold text-zinc-100">
          マンガ<span className="text-red-400">ハブ</span>
        </h3>
      </div>
      <p className="text-sm text-zinc-400">
        Your ultimate destination for discovering and tracking manga.
      </p>
      <a 
        href="/about"
        className="inline-block text-sm text-red-400 hover:text-red-300 transition-colors"
      >
        Learn more about us →
      </a>
    </div>
  );
};