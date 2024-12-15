import React from 'react';
import { Twitter, Github, MessageCircle, Youtube, Twitch } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/mangahub', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/mangahub', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://discord.gg/mangahub', label: 'Discord' },
    { icon: Youtube, href: 'https://youtube.com/mangahub', label: 'YouTube' },
    { icon: Twitch, href: 'https://twitch.tv/mangahub', label: 'Twitch' },
  ];

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-zinc-100 japanese-text">ソーシャル</h4>
      <div className="grid grid-cols-3 gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 bg-zinc-800/50 text-zinc-400 
              hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};