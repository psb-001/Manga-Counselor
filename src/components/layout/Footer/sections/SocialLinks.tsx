import React from 'react';
import { Twitter, Github, Youtube, MessageCircle, Twitch, Instagram, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/mangahub',  },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mangahub',  },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/mangahub',  },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/mangahub',  },
  { icon: Github, label: 'GitHub', href: 'https://github.com/mangahub',  },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/mangahub', },
  { icon: Twitch, label: 'Twitch', href: 'https://twitch.tv/mangahub', },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/mangahub', },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        Connect With Us
        <span className="text-sm text-zinc-400 japanese-text">フォローする</span>
      </h4>
      
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
        {socialLinks.map(({ icon: Icon, label, href, japanese }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
            aria-label={label}
          >
            <div className="p-3 bg-zinc-800/50 rounded-lg 
              group-hover:bg-red-500/10 group-hover:scale-110
              transition-all duration-300 ease-out"
            >
              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-400 
                transition-colors duration-300" />
            </div>
            <span className="text-xs text-zinc-500 group-hover:text-red-400 
              transition-colors duration-300 hidden sm:block">
              {japanese}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};