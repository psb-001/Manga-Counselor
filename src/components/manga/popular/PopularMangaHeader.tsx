import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PopularMangaHeaderProps {
  totalManga: number;
}

export const PopularMangaHeader: React.FC<PopularMangaHeaderProps> = ({ totalManga }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-red-400" />
          Most Popular Manga
          <span className="text-sm text-gray-400 ml-2 japanese-text">人気マンガ</span>
        </h2>
        <p className="text-zinc-400 mt-1">
          Discover the top {totalManga.toLocaleString()} most popular manga series
        </p>
      </div>
    </div>
  );
};