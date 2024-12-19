import React from 'react';
import { Users, BookOpen, Star, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Active Users',
    value: '50K+',
    japanese: 'アクティブユーザー',
    color: 'text-blue-400'
  },
  {
    icon: BookOpen,
    label: 'Manga Indexed',
    value: '15K+',
    japanese: '登録作品数',
    color: 'text-green-400'
  },
  {
    icon: Star,
    label: 'Recommendations',
    value: '1M+',
    japanese: 'レコメンド数',
    color: 'text-yellow-400'
  },
  {
    icon: Heart,
    label: 'Reading Lists',
    value: '100K+',
    japanese: '読書リスト',
    color: 'text-red-400'
  }
];

export const StatsSection: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {stats.map(({ icon: Icon, label, value, japanese, color }) => (
      <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
        <Icon className={`w-6 h-6 ${color} mb-4`} />
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="text-xs text-zinc-600 japanese-text mt-1">{japanese}</p>
      </div>
    ))}
  </section>
);