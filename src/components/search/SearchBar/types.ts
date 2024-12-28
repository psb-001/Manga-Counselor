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

export interface SearchIconProps {
  className?: string;
}

export interface SearchButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}