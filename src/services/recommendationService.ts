import { apiGet } from '../utils/apiClient';
import { Manga } from '../types/manga';
import { RecommendationFilters } from '../types/filters';

class RecommendationService {
  private getDateRangeForDecade(decade: string): { start: string; end: string } {
    const decadeStart = parseInt(decade);
    return {
      start: `${decadeStart}-01-01`,
      end: `${decadeStart + 9}-12-31`
    };
  }

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

    if (filters.decade) {
      const { start, end } = this.getDateRangeForDecade(filters.decade);
      params.start_date = start;
      params.end_date = end;
    }

    if (filters.rating) {
      params.rating = filters.rating;
    }

    const response = await apiGet<Manga[]>('/manga', params);
    return response.data;
  }
}

export const recommendationService = new RecommendationService();