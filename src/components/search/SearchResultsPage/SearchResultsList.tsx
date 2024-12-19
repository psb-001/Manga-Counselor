import React from 'react';
import { Manga } from '../../../types/manga';
import { SearchResultsGrid } from './SearchResultsGrid';
import { NoResults } from './NoResults';
import { dedupeMangaResults, sortMangaByPopularity } from '../../../utils/mangaUtils';

interface SearchResultsListProps {
  results: Manga[];
  query: string;
  onMangaSelect: (manga: Manga) => void;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  query,
  onMangaSelect,
}) => {
  const processedResults = React.useMemo(() => {
    const uniqueResults = dedupeMangaResults(results);
    return sortMangaByPopularity(uniqueResults);
  }, [results]);

  if (processedResults.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <>
      <p className="text-sm text-zinc-400 mb-4">
        Found {processedResults.length} manga
      </p>
      <SearchResultsGrid
        results={processedResults}
        onMangaSelect={onMangaSelect}
      />
    </>
  );
};