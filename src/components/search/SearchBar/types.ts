export interface SearchInputProps {
  query: string;
  isExpanded: boolean;
  isLoading: boolean;
  onQueryChange: (value: string) => void;
  onExpand: () => void;
  onCollapse: () => void;
  onClear: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}