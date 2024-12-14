import { useEffect } from 'react';
import { useApi } from './useApi';
import { mangaService } from '../services/mangaService';
import { genreService } from '../services/genreService';
import { Manga, Genre } from '../types/manga';

export const useManga = () => {
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
  } = useApi<Genre[]>([], { 
    retryCount: 3,
    onError: (error) => {
      console.error('Failed to fetch genres:', error);
    }
  });

  useEffect(() => {
    const loadInitialData = async () => {
      await Promise.all([
        executePopular(() => mangaService.getPopular()),
        executeGenres(() => genreService.getGenres())
      ]);
    };
    loadInitialData();
  }, []);

  return {
    popularManga,
    popularError,
    popularLoading,
    genres,
    genresError,
    genresLoading,
  };
};