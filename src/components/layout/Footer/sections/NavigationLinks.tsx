import React from 'react';
import { Globe2 } from 'lucide-react';

const links = [
  { label: 'Discover', japanese: '発見' },
  { label: 'Popular', japanese: '人気' },
  { label: 'Reading List', japanese: '読書リスト' },
  { label: 'Community', japanese: 'コミュニティ' },
];

export const NavigationLinks: React.FC = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
        <Globe2 className="w-4 h-4 text-red-400" />
        Navigation
      </h4>
      <ul className="space-y-3">
        {links.map(({ label, japanese }) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              className="group flex items-center text-zinc-400 hover:text-red-400 transition-colors"
            >
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