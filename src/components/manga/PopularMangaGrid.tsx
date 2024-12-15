import React, { useState, useEffect } from 'react';
import { Manga } from '../../types/manga';
import { mangaService } from '../../services/mangaService';
import { PopularMangaHeader } from './popular/PopularMangaHeader';
import { MangaGrid } from './popular/MangaGrid';
import { LoadMoreButton } from './popular/LoadMoreButton';

interface PopularMangaGridProps {
  onMoreInfo: (manga: Manga) => void;
}

export const PopularMangaGrid: React.FC<PopularMangaGridProps> = ({ onMoreInfo }) => {
  const [manga, setManga] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  const loadManga = async (pageNum: number) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await mangaService.getPopular(pageNum);
      
      if (pageNum === 1) {
        setManga(response.data);
      } else {
        setManga(prev => [...prev, ...response.data]);
      }
      
      if (response.pagination) {
        setHasMore(response.pagination.has_next_page);
        setTotalItems(response.pagination.items.total);
      } else {
        setHasMore(false);
        setTotalItems(manga.length);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load popular manga');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadManga(1);
  }, []);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadManga(nextPage);
    }
  };

  if (error) {
    return (
      <div className="text-center py-12 bg-red-900/20 rounded-lg border border-red-900/50">
        <p className="text-red-200">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PopularMangaHeader totalManga={totalItems} />
      
      <MangaGrid
        manga={manga}
        isLoading={isLoading}
        onMoreInfo={onMoreInfo}
      />
      
      <LoadMoreButton
        onClick={handleLoadMore}
        isLoading={isLoading}
        hasMore={hasMore}
      />
    </div>
  );
};