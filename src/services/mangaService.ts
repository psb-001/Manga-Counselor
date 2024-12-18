import { apiGet } from '../utils/apiClient';
import { Manga, ApiResponse } from '../types/manga';

class MangaService {
  async getPopular(page: number = 1): Promise<ApiResponse<Manga[]>> {
    return apiGet<Manga[]>('/top/manga', {
      page: page.toString(),
      limit: '24',
      type: 'manga',
      filter: 'bypopularity',
    });
  }

  async searchManga(query: string): Promise<ApiResponse<Manga[]>> {
    return apiGet<Manga[]>('/manga', {
      q: query,
      sfw: 'true',
      limit: '25',
      order_by: 'popularity',
    });
  }

  async getRecommendations(params: { genre?: string; year?: string; rating?: string }): Promise<ApiResponse<Manga[]>> {
    return apiGet<Manga[]>('/manga', { 
      sfw: 'true',
      limit: '20',
      ...params 
    });
  }

  async getSimilarManga(genres: string[]): Promise<ApiResponse<Manga[]>> {
    return apiGet<Manga[]>('/manga', {
      genres: genres.join(','),
      sfw: 'true',
      limit: '5',
      order_by: 'popularity'
    });
  }
}

export const mangaService = new MangaService();