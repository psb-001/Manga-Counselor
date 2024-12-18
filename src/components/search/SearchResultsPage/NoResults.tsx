import React from 'react';
import { SearchX } from 'lucide-react';

interface NoResultsProps {
  query: string;
}

export const NoResults: React.FC<NoResultsProps> = ({ query }) => (
  <div className="text-center py-12">
    <SearchX className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
    <h3 className="text-xl font-medium text-white mb-2">
      No results found for "{query}"
    </h3>
    <p className="text-zinc-400">
      Try adjusting your search or filters to find what you're looking for
    </p>
  </div>
);