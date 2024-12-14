import React from 'react';

interface LoadingCardsProps {
  count: number;
}

export const LoadingCards: React.FC<LoadingCardsProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
        >
          <div className="aspect-[3/4] bg-gray-200" />
          <div className="p-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </>
  );
}