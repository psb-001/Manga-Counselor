import { Manga, SavedManga } from '../../types/manga';
import { encryptData, decryptData } from '../security';

const STORAGE_KEY = 'manga-readlater';
const MAX_STORAGE_ITEMS = 1000;

export const getSavedManga = (): SavedManga[] => {
  try {
    const encrypted = localStorage.getItem(STORAGE_KEY);
    if (!encrypted) return [];
    
    const decrypted = decryptData(encrypted);
    const parsed = JSON.parse(decrypted);
    
    if (!Array.isArray(parsed)) {
      throw new Error('Invalid storage data format');
    }
    
    return parsed;
  } catch (error) {
    console.error('Error reading from storage:', error);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
};

export const saveManga = (manga: Manga) => {
  try {
    const saved = getSavedManga();
    
    if (saved.length >= MAX_STORAGE_ITEMS) {
      throw new Error('Storage limit reached');
    }
    
    if (saved.some(m => m.mal_id === manga.mal_id)) {
      return;
    }
    
    const newManga: SavedManga = {
      ...manga,
      chaptersRead: 0,
      isRead: false,
      savedAt: Date.now(),
    };
    
    const encrypted = encryptData(JSON.stringify([...saved, newManga]));
    localStorage.setItem(STORAGE_KEY, encrypted);
  } catch (error) {
    console.error('Error saving manga:', error);
    throw error;
  }
};

export const updateMangaProgress = (mangaId: number, chaptersRead: number) => {
  try {
    const saved = getSavedManga();
    const updated = saved.map(manga => 
      manga.mal_id === mangaId 
        ? { 
            ...manga, 
            chaptersRead: Math.max(0, Math.min(chaptersRead, manga.chapters || Infinity)),
            isRead: manga.chapters ? chaptersRead === manga.chapters : false
          } 
        : manga
    );
    
    const encrypted = encryptData(JSON.stringify(updated));
    localStorage.setItem(STORAGE_KEY, encrypted);
  } catch (error) {
    console.error('Error updating manga progress:', error);
    throw error;
  }
};

export const removeManga = (mangaId: number) => {
  try {
    const saved = getSavedManga();
    const filtered = saved.filter(manga => manga.mal_id !== mangaId);
    
    const encrypted = encryptData(JSON.stringify(filtered));
    localStorage.setItem(STORAGE_KEY, encrypted);
  } catch (error) {
    console.error('Error removing manga:', error);
    throw error;
  }
};