export interface Manga {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    }
  };
  synopsis: string;
  score: number;
  authors: Array<{
    name: string;
  }>;
  published: {
    from: string;
    to: string | null;
  };
  chapters: number;
  status: string;
  genres: Array<{
    name: string;
  }>;
  themes: Array<{
    name: string;
  }>;
  demographics: Array<{
    name: string;
  }>;
}

export interface SavedManga extends Manga {
  chaptersRead: number;
  isRead: boolean;
  savedAt: number;
}

export type Genre = {
  mal_id: number;
  name: string;
  count: number;
}