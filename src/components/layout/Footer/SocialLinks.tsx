import React from 'react';
import { Github } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/psb-001', label: 'GitHub' },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-zinc-100">Connect</h4>
      <div className="flex gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-800/50 text-zinc-400 hover:text-red-400 
              hover:bg-red-500/10 rounded-lg transition-all duration-300"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};