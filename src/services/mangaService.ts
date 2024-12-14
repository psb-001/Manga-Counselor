import { apiGet } from '../utils/apiClient';
import { Manga, Genre } from '../types/manga';

export const mangaService = {
  getRecommendations: (params: { genre?: string; year?: string; rating?: string }) =>
    apiGet<Manga[]>('/manga', { 
      sfw: 'true',
      limit: '20',
      ...params 
    }),

  getTrending: () =>
    apiGet<Manga[]>('/top/manga', {
      filter: 'airing',
      limit: '10'
    }),

  getPopular: () =>
    apiGet<Manga[]>('/top/manga', {
      type: 'manga',
      filter: 'bypopularity',
      limit: '10'
    }),

  getUpcoming: () =>
    apiGet<Manga[]>('/seasons/upcoming'),

  getGenres: async () => {
    const genres = await apiGet<Genre[]>('/genres/manga');
    const uniqueGenres = new Map();
    genres.forEach(genre => {
      if (!uniqueGenres.has(genre.mal_id)) {
        uniqueGenres.set(genre.mal_id, genre);
      }
    });
    return Array.from(uniqueGenres.values());
  }
};