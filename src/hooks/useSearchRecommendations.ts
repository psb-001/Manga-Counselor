import { useState, useEffect } from 'react';
import { Manga } from '../types/manga';
import { mangaService } from '../services/mangaService';

export const useSearchRecommendations = (query: string) => {
  const [recommendations, setRecommendations] = useState<Manga[]>([]);

  useEffect(() => {
    const getRecommendations = async () => {
      if (query.length < 3) {
        setRecommendations([]);
        return;
      }

      try {
        // Get recommendations based on similar genres/themes
        const response = await mangaService.searchManga(query);
        const filtered = response.data.filter(manga => 
          !manga.title.toLowerCase().includes(query.toLowerCase())
        );
        setRecommendations(filtered);
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
        setRecommendations([]);
      }
    };

    getRecommendations();
  }, [query]);

  return recommendations;
};