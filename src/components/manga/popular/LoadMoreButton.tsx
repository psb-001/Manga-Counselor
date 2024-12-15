import React from 'react';
import { Loader } from 'lucide-react';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  isLoading,
  hasMore
}) => {
  if (!hasMore) return null;

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full mt-8 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 
        disabled:bg-zinc-800/50 disabled:cursor-not-allowed
        text-white rounded-lg flex items-center justify-center gap-2 
        transition-colors duration-200"
    >
      {isLoading ? (
        <>
          <Loader className="w-5 h-5 animate-spin" />
          Loading more...
        </>
      ) : (
        'Load More Manga'
      )}
    </button>
  );
};