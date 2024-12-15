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

// Jikan API response structure
export interface ApiResponse<T> {
  data: T;
  pagination?: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}