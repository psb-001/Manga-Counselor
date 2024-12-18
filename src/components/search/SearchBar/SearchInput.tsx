import React from 'react';
import { Search, X, Loader } from 'lucide-react';
import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({
  query,
  isExpanded,
  isLoading,
  inputRef,
  onQueryChange,
  onExpand,
  onCollapse,
  onClear,
  onKeyDown,
}) => (
  <div className={`
    flex items-center bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 
    rounded-full overflow-hidden transition-all duration-300 ease-out
    ${isExpanded ? 'w-[300px]' : 'w-10 hover:w-[300px] hover:border-zinc-600'}
  `}>
    <SearchIcon onExpand={onExpand} />
    <SearchField
      ref={inputRef}
      value={query}
      onChange={onQueryChange}
      onFocus={onExpand}
      onBlur={onCollapse}
      onKeyDown={onKeyDown}
    />
    <ClearButton
      show={isLoading || query}
      isLoading={isLoading}
      onClear={onClear}
    />
  </div>
);

const SearchIcon: React.FC<{ onExpand: () => void }> = ({ onExpand }) => (
  <button
    onClick={onExpand}
    className="p-2 text-zinc-400 hover:text-white transition-colors"
  >
    <Search className="w-5 h-5" />
  </button>
);

const SearchField = React.forwardRef<HTMLInputElement, {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}>((props, ref) => (
  <input
    ref={ref}
    type="text"
    value={props.value}
    onChange={(e) => props.onChange(e.target.value)}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    placeholder="Search manga..."
    className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 text-sm px-2"
  />
));

const ClearButton: React.FC<{
  show: boolean;
  isLoading: boolean;
  onClear: () => void;
}> = ({ show, isLoading, onClear }) => {
  if (!show) return null;
  
  return (
    <button
      onClick={onClear}
      className="p-2 text-zinc-400 hover:text-white transition-colors"
    >
      {isLoading ? (
        <Loader className="w-5 h-5 animate-spin" />
      ) : (
        <X className="w-5 h-5" />
      )}
    </button>
  );
};