import React from 'react';
import { BookOpen } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-16 bg-zinc-900/50 rounded-xl border border-zinc-800">
      <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Your Reading List is Empty</h3>
      <p className="text-gray-400 max-w-md mx-auto">
        Start building your manga collection by clicking the bookmark icon on any manga card
      </p>
    </div>
  );
};