import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  japanese: string;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  japanese,
  color
}) => {
  return (
    <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6
      hover:bg-zinc-900 transition-colors duration-200 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <Icon className={`w-6 h-6 ${color} mb-3`} />
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="text-xs text-zinc-600 japanese-text mt-1">{japanese}</p>
      </div>
    </div>
  );
};