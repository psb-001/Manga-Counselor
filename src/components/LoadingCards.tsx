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
          className="relative w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
        >
          <div className="w-full h-full bg-gray-200" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-2">
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      ))}
    </>
  );
};