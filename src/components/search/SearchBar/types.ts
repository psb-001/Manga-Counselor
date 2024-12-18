import { Manga } from '../../../types/manga';

export interface SearchInputProps {
  query: string;
  isExpanded: boolean;
  isLoading: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onQueryChange: (value: string) => void;
  onExpand: () => void;
  onCollapse: () => void;
  onClear: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface SearchResultsProps {
  results: Manga[];
  onSelectManga: (manga: Manga) => void;
}