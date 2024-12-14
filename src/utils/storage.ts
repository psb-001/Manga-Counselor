import { Manga, SavedManga } from '../types/manga';

const STORAGE_KEY = 'manga-readlater';

export const getSavedManga = (): SavedManga[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveManga = (manga: Manga) => {
  const saved = getSavedManga();
  const newManga: SavedManga = {
    ...manga,
    chaptersRead: 0,
    isRead: false,
    savedAt: Date.now(),
  };
  
  if (!saved.some(m => m.mal_id === manga.mal_id)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, newManga]));
  }
};

export const updateMangaProgress = (mangaId: number, chaptersRead: number) => {
  const saved = getSavedManga();
  const updated = saved.map(manga => 
    manga.mal_id === mangaId 
      ? { 
          ...manga, 
          chaptersRead,
          isRead: chaptersRead === manga.chapters 
        } 
      : manga
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const removeManga = (mangaId: number) => {
  const saved = getSavedManga();
  const filtered = saved.filter(manga => manga.mal_id !== mangaId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};