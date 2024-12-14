import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/mangahub', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/mangahub', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://discord.gg/mangahub', label: 'Discord' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-zinc-100 japanese-text">ソーシャル</h3>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-800/50 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};