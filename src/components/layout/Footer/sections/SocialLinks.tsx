import React from 'react';
import { Twitter, Github, Youtube, MessageCircle, Twitch } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/mangahub', japanese: 'ツイッター' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/mangahub', japanese: 'ギットハブ' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/mangahub', japanese: 'ユーチューブ' },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/mangahub', japanese: 'ディスコード' },
  { icon: Twitch, label: 'Twitch', href: 'https://twitch.tv/mangahub', japanese: 'ツイッチ' },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {socialLinks.map(({ icon: Icon, label, href, japanese }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-1"
          aria-label={label}
        >
          <div className="p-3 bg-zinc-800/50 text-zinc-400 rounded-lg 
            group-hover:bg-red-500/10 group-hover:text-red-400 transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
            {japanese}
          </span>
        </a>
      ))}
    </div>
  );
};