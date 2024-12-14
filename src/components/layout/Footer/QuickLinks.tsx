import React from 'react';
import { ChevronRight } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  const links = [
    { label: 'Popular Manga', href: '#popular', japanese: '人気マンガ' },
    { label: 'Latest Updates', href: '#latest', japanese: '最新アップデート' },
    { label: 'Reading List', href: '#readlater', japanese: '読書リスト' },
    { label: 'Genres', href: '#genres', japanese: 'ジャンル' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-zinc-100 japanese-text">クイックリンク</h3>
      <ul className="space-y-3">
        {links.map(({ label, href, japanese }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex items-center text-zinc-400 hover:text-red-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 group-hover:text-red-400" />
              <span>{label}</span>
              <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
                {japanese}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};