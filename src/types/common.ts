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

export interface Status {
  idle: 'idle';
  loading: 'loading';
  success: 'success';
  error: 'error';
}

export type StatusType = Status[keyof Status];

export interface ApiError {
  message: string;
  status: number;
}