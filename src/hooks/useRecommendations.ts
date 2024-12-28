import { useState } from 'react';
import { Manga } from '../types/manga';
import { RecommendationFilters } from '../types/filters';
import { recommendationService } from '../services/recommendationService';

export const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const getRecommendations = async (filters: RecommendationFilters, isRefresh = false) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Only fetch if at least one filter is selected
      if (!filters.genre && !filters.decade && !filters.rating) {
        setRecommendations([]);
        return;
      }

      // If refreshing, increment the page to get new results
      if (isRefresh) {
        setPage(prev => prev + 1);
      }

      const data = await recommendationService.getRecommendations(filters, page);
      
      // Filter out any manga that are already in recommendations
      const newRecommendations = isRefresh 
        ? data.filter(manga => !recommendations.some(rec => rec.mal_id === manga.mal_id))
        : data;

      // Ensure we get exactly 4 unique recommendations
      const limitedData = newRecommendations.slice(0, 4);
      
      // If we couldn't get enough new recommendations, reset page and try again
      if (isRefresh && limitedData.length < 4) {
        setPage(1);
        const fallbackData = await recommendationService.getRecommendations(filters, 1);
        setRecommendations(fallbackData.slice(0, 4));
      } else {
        setRecommendations(limitedData);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch recommendations');
      setRecommendations([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    recommendations,
    isLoading,
    error,
    getRecommendations,
  };
};