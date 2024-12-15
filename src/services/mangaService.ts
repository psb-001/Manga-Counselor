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

  async getRecommendations(params: { genre?: string; year?: string; rating?: string }): Promise<ApiResponse<Manga[]>> {
    return apiGet<Manga[]>('/manga', { 
      sfw: 'true',
      limit: '20',
      ...params 
    });
  }
}

export const mangaService = new MangaService();