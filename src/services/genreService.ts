import { apiGet } from '../utils/apiClient';
import { Genre } from '../types/manga';

class GenreService {
  private cache: Genre[] | null = null;
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 1000 * 60 * 60; // 1 hour

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

  async getGenres(): Promise<Genre[]> {
    try {
      // Return cached genres if they're still valid
      if (this.cache && Date.now() < this.cacheExpiry) {
        return this.cache;
      }

      const genres = await apiGet<Genre[]>('/genres/manga');
      const uniqueGenres = this.removeDuplicateGenres(genres);
      
      // Update cache
      this.cache = uniqueGenres;
      this.cacheExpiry = Date.now() + this.CACHE_DURATION;
      
      return uniqueGenres;
    } catch (error) {
      console.error('Failed to fetch genres:', error);
      // Return cached genres if available, even if expired
      return this.cache || [];
    }
  }
}

export const genreService = new GenreService();