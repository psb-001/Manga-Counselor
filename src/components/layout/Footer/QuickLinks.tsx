import React from 'react';
import { ChevronRight } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  const links = [
    { label: 'Popular Manga', href: '#popular' },
    { label: 'Latest Updates', href: '#latest' },
    { label: 'Reading List', href: '#readlater' },
    { label: 'Genres', href: '#genres' },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-zinc-100">Quick Links</h4>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex items-center text-zinc-400 hover:text-red-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 group-hover:text-red-400" />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};