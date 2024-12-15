import { apiGet } from '../utils/apiClient';
import { Genre } from '../types/manga';

class GenreService {
  private cache: Genre[] | null = null;
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 1000 * 60 * 60; // 1 hour
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000;

  private removeDuplicateGenres(genres: Genre[]): Genre[] {
    const uniqueGenres = new Map<number, Genre>();
    
    genres.forEach(genre => {
      if (!uniqueGenres.has(genre.mal_id)) {
        uniqueGenres.set(genre.mal_id, genre);
      }
    });
    
    return Array.from(uniqueGenres.values())
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private async fetchWithRetry(attempt: number = 1): Promise<Genre[]> {
    try {
      const response = await apiGet<Genre[]>('/genres/manga');
      return response.data;
    } catch (error) {
      if (attempt < this.MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, this.RETRY_DELAY * attempt));
        return this.fetchWithRetry(attempt + 1);
      }
      throw error;
    }
  }

  async getGenres(): Promise<Genre[]> {
    try {
      // Return cached genres if they're still valid
      if (this.cache && Date.now() < this.cacheExpiry) {
        return this.cache;
      }

      const genres = await this.fetchWithRetry();
      const uniqueGenres = this.removeDuplicateGenres(genres);
      
      // Update cache
      this.cache = uniqueGenres;
      this.cacheExpiry = Date.now() + this.CACHE_DURATION;
      
      return uniqueGenres;
    } catch (error) {
      console.error('Failed to fetch genres:', error);
      // Return cached genres if available, even if expired
      if (this.cache) {
        return this.cache;
      }
      // Return a minimal set of common manga genres as fallback
      return [
        { mal_id: 1, name: 'Action', count: 0 },
        { mal_id: 2, name: 'Adventure', count: 0 },
        { mal_id: 4, name: 'Comedy', count: 0 },
        { mal_id: 8, name: 'Drama', count: 0 },
        { mal_id: 10, name: 'Fantasy', count: 0 },
      ];
    }
  }
}

export const genreService = new GenreService();