const BASE_URL = 'https://api.jikan.moe/v4';

const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data?.data || [];
};

export const fetchMangaRecommendations = async (
  genre?: string,
  year?: string,
  rating?: string
) => {
  try {
    let url = `${BASE_URL}/manga?sfw=true&limit=20`;
    
    if (genre) url += `&genres=${genre}`;
    if (year) url += `&start_date=${year}`;
    if (rating) url += `&rating=${rating}`;

    const response = await fetch(url);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching manga recommendations:', error);
    return [];
  }
};

export const fetchTrendingManga = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top/manga?filter=airing&limit=10`);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching trending manga:', error);
    return [];
  }
};

export const fetchPopularManga = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top/manga?type=manga&filter=bypopularity&limit=10`);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching popular manga:', error);
    return [];
  }
};

export const fetchUpcomingManga = async () => {
  try {
    const response = await fetch(`${BASE_URL}/seasons/upcoming`);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching upcoming manga:', error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genres/manga`);
    const data = await handleApiResponse(response);
    
    // Remove duplicate genres by using a Map with mal_id as key
    const uniqueGenres = new Map();
    data.forEach(genre => {
      if (!uniqueGenres.has(genre.mal_id)) {
        uniqueGenres.set(genre.mal_id, genre);
      }
    });
    
    return Array.from(uniqueGenres.values());
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};