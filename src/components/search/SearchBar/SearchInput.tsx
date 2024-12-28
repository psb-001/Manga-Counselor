import React, { memo } from 'react';
import { Search, X, Loader } from 'lucide-react';
import { SearchInputProps } from './types';
import { SearchButton } from './SearchButton';

export const SearchInput: React.FC<SearchInputProps> = memo(({
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
  <div
    className={`
      flex items-center bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 
      rounded-full overflow-hidden transition-all duration-300 ease-out
      ${isExpanded ? 'w-[300px]' : 'w-10 hover:w-[300px] hover:border-zinc-600'}
    `}
  >
    <SearchButton onClick={onExpand}>
      <Search className="w-5 h-5" />
    </SearchButton>
    
    <input
      ref={inputRef}
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      onFocus={onExpand}
      onBlur={onCollapse}
      onKeyDown={onKeyDown}
      placeholder="Search manga..."
      className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 text-sm px-2"
    />
    
    {(isLoading || query) && (
      <SearchButton onClick={onClear}>
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <X className="w-5 h-5" />
        )}
      </SearchButton>
    )}
  </div>
));

SearchInput.displayName = 'SearchInput';