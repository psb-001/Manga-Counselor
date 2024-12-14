import { apiGet } from '../utils/apiClient';
import { Manga } from '../types/manga';
import { RecommendationFilters } from '../types/filters';

export const recommendationService = {
  getRecommendations: async (filters: RecommendationFilters, page: number = 1): Promise<Manga[]> => {
    const params: Record<string, string> = {
      sfw: 'true',
      limit: '10', // Request more items to ensure we get enough unique ones
      order_by: 'score',
      sort: 'desc',
      page: page.toString(),
    };

    if (filters.genre) {
      params.genres = filters.genre;
    }

    if (filters.year) {
      const startDate = `${filters.year}-01-01`;
      const endDate = `${filters.year}-12-31`;
      params.start_date = startDate;
      params.end_date = endDate;
    }

    if (filters.rating) {
      params.rating = filters.rating;
    }

    return apiGet<Manga[]>('/manga', params);
  },
};