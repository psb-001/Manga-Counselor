import React from 'react';
import { Users, BookOpen, Star } from 'lucide-react';
import { StatCard } from '../components/StatCard';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};