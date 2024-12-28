import React from 'react';
import { SearchButtonProps } from './types';

export const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  children,
  className = ''
}) => (
  <button
    onClick={onClick}
    className={`p-2 text-zinc-400 hover:text-white transition-colors ${className}`}
  >
    {children}
  </button>
);