import React from 'react';
import { Calendar } from 'lucide-react';

interface LastUpdatedProps {
  date: string;
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => (
  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
    <Calendar className="w-4 h-4" />
    <span>Last updated: {new Date(date).toLocaleDateString()}</span>
  </div>
);