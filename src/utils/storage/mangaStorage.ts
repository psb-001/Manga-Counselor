import { Storage } from './base';
import { Manga, SavedManga } from '../../types/manga';

class MangaStorage extends Storage {
  constructor() {
    super({ key: 'manga-readlater', maxItems: 1000 });
  }

  getSavedManga(): SavedManga[] {
    const data = this.getData<SavedManga[]>();
    return Array.isArray(data) ? data : [];
  }

  saveManga(manga: Manga): void {
    const saved = this.getSavedManga();
    
    // Check storage limit
    this.checkLimit(saved.length);
    
    // Check for duplicates
    if (saved.some(m => m.mal_id === manga.mal_id)) {
      return;
    }
    
    const newManga: SavedManga = {
      ...manga,
      chaptersRead: 0,
      isRead: false,
      savedAt: Date.now(),
    };
    
    this.setData([...saved, newManga]);
  }

  updateProgress(mangaId: number, chaptersRead: number): void {
    const saved = this.getSavedManga();
    const updated = saved.map(manga => 
      manga.mal_id === mangaId 
        ? { 
            ...manga, 
            chaptersRead: Math.max(0, Math.min(chaptersRead, manga.chapters || Infinity)),
            isRead: manga.chapters ? chaptersRead === manga.chapters : false
          } 
        : manga
    );
    
    this.setData(updated);
  }

  removeManga(mangaId: number): void {
    const saved = this.getSavedManga();
    const filtered = saved.filter(manga => manga.mal_id !== mangaId);
    this.setData(filtered);
  }
}

// Export singleton instance
export const mangaStorage = new MangaStorage();