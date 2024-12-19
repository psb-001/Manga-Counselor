import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-6 h-6 border-2 border-zinc-800 border-t-red-400 rounded-full animate-spin" />
  </div>
);