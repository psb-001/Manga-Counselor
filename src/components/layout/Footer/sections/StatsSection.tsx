import React from 'react';
import { Sparkles } from 'lucide-react';

const stats = [
  { label: 'Active Readers', value: '10K+', japanese: '読者数' },
  { label: 'Manga Titles', value: '5000+', japanese: '作品数' },
  { label: 'Daily Updates', value: '100+', japanese: '更新数' },
];

export const StatsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-red-400" />
        Stats
      </h4>
      <ul className="space-y-4">
        {stats.map(({ label, value, japanese }) => (
          <li key={label} className="group">
            <div className="text-zinc-400">{label}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-red-400">{value}</span>
              <span className="text-xs text-zinc-600 japanese-text">{japanese}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};