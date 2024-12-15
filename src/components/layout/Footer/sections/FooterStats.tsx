import React from 'react';
import { Users, BookOpen, Star } from 'lucide-react';

const stats = [
  { 
    icon: Users,
    label: 'Active Readers',
    value: '50K+',
    japanese: 'アクティブな読者',
    color: 'text-blue-400'
  },
  { 
    icon: BookOpen,
    label: 'Manga Titles',
    value: '10K+',
    japanese: 'マンガタイトル',
    color: 'text-green-400'
  },
  { 
    icon: Star,
    label: 'Reviews',
    value: '100K+',
    japanese: 'レビュー',
    color: 'text-yellow-400'
  }
];

export const FooterStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map(({ icon: Icon, label, value, japanese, color }) => (
        <div
          key={label}
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4
            hover:bg-zinc-900 transition-colors duration-200"
        >
          <Icon className={`w-5 h-5 ${color} mb-2`} />
          <p className="text-xl font-bold text-white">{value}</p>
          <p className="text-sm text-zinc-400">{label}</p>
          <p className="text-xs text-zinc-600 japanese-text">{japanese}</p>
        </div>
      ))}
    </div>
  );
};