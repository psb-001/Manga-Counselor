import { useEffect } from 'react';
import { useApi } from './useApi';
import { mangaService } from '../services/mangaService';
import { Manga, Genre } from '../types/manga';

export const useManga = () => {
  const {
    data: trendingManga,
    error: trendingError,
    isLoading: trendingLoading,
    execute: executeTrending
  } = useApi<Manga[]>([], { retryCount: 3 });

  const {
    data: popularManga,
    error: popularError,
    isLoading: popularLoading,
    execute: executePopular
  } = useApi<Manga[]>([], { retryCount: 3 });

  const {
    data: genres,
    error: genresError,
    isLoading: genresLoading,
    execute: executeGenres
  } = useApi<Genre[]>([], { retryCount: 3 });

  const {
    data: recommendations,
    error: recommendationsError,
    isLoading: recommendationsLoading,
    execute: executeRecommendations
  } = useApi<Manga[]>([], { retryCount: 2 });

  useEffect(() => {
    const loadInitialData = async () => {
      await Promise.all([
        executeTrending(() => mangaService.getTrending()),
        executePopular(() => mangaService.getPopular()),
        executeGenres(() => mangaService.getGenres())
      ]);
    };
    loadInitialData();
  }, []);

  const getRecommendations = async (filters: {
    genre: string;
    year: string;
    rating: string;
  }) => {
    return executeRecommendations(() => 
      mangaService.getRecommendations(filters)
    );
  };

  return {
    trendingManga,
    trendingError,
    trendingLoading,
    popularManga,
    popularError,
    popularLoading,
    genres,
    genresError,
    genresLoading,
    recommendations,
    recommendationsError,
    recommendationsLoading,
    getRecommendations
  };
};