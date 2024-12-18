export interface SearchFilters {
  status: string;
  type: string;
  minScore: number;
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  results: any[];
  isLoading: boolean;
}