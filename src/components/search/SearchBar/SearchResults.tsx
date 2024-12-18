import React from 'react';
import { SearchResultItem } from './SearchResultItem';
import { SearchResultsProps } from './types';

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onSelectManga,
}) => (
  <div className="
    absolute top-full left-0 right-0 mt-2 
    max-h-[60vh] overflow-y-auto 
    bg-zinc-900/95 backdrop-blur-sm 
    border border-zinc-800 rounded-lg shadow-xl
  ">
    {results.map((manga) => (
      <SearchResultItem
        key={manga.mal_id}
        manga={manga}
        onSelect={() => onSelectManga(manga)}
      />
    ))}
  </div>
);