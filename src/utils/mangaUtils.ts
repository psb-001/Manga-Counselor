import { Manga } from '../types/manga';

export const dedupeMangaResults = (manga: Manga[]): Manga[] => {
  const uniqueMap = new Map<number, Manga>();
  manga.forEach(item => {
    if (!uniqueMap.has(item.mal_id)) {
      uniqueMap.set(item.mal_id, item);
    }
  });
  return Array.from(uniqueMap.values());
};

export const sortMangaByPopularity = (manga: Manga[]): Manga[] => {
  return [...manga].sort((a, b) => (b.score || 0) - (a.score || 0));
};