import React from 'react';

interface MangaCardFooterProps {
  title: string;
  chapters?: number;
  status: string;
}

export const MangaCardFooter: React.FC<MangaCardFooterProps> = ({
  title,
  chapters,
  status,
}) => (
  <div className="p-2">
    <h3 className="text-sm font-medium text-white line-clamp-1">{title}</h3>
    <div className="flex justify-between items-center mt-1">
      <span className="text-xs text-gray-400">
        {chapters ? `${chapters} ch.` : 'Ongoing'}
      </span>
      <span className="text-xs text-gray-400 capitalize">
        {status.toLowerCase()}
      </span>
    </div>
  </div>
);