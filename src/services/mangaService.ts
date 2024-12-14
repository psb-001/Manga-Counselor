import { apiGet } from '../utils/apiClient';
import { Manga } from '../types/manga';

class MangaService {
  async getPopular(): Promise<Manga[]> {
    return apiGet<Manga[]>('/top/manga', {
      type: 'manga',
      filter: 'bypopularity',
      limit: '10'
    });
  }

  async getRecommendations(params: { genre?: string; year?: string; rating?: string }): Promise<Manga[]> {
    return apiGet<Manga[]>('/manga', { 
      sfw: 'true',
      limit: '20',
      ...params 
    });
  }
}

export const mangaService = new MangaService();