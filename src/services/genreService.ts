import { apiGet } from '../utils/apiClient';
import { Genre } from '../types/manga';

class GenreService {
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
      const genres = await apiGet<Genre[]>('/genres/manga');
      return this.removeDuplicateGenres(genres);
    } catch (error) {
      console.error('Failed to fetch genres:', error);
      return [];
    }
  }
}

export const genreService = new GenreService();