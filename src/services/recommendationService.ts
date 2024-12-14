import { apiGet } from '../utils/apiClient';
import { Manga } from '../types/manga';
import { RecommendationFilters } from '../types/filters';

class RecommendationService {
  async getRecommendations(filters: RecommendationFilters, page: number = 1): Promise<Manga[]> {
    const params: Record<string, string> = {
      sfw: 'true',
      limit: '10',
      order_by: 'score',
      sort: 'desc',
      page: page.toString(),
    };

    if (filters.genre) {
      params.genres = filters.genre;
    }

    if (filters.year) {
      params.start_date = `${filters.year}-01-01`;
      params.end_date = `${filters.year}-12-31`;
    }

    if (filters.rating) {
      params.rating = filters.rating;
    }

    return apiGet<Manga[]>('/manga', params);
  }
}

export const recommendationService = new RecommendationService();