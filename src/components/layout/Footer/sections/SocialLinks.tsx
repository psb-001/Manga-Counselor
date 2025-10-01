import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/pratham01012007',  },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prathamesh-bhujbal-psb', },
  { icon: Github, label: 'GitHub', href: 'https://github.com/psb-001',  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
      
      <div className="grid grid-cols-3 gap-4">
        {socialLinks.map(({ icon: Icon, label, href }) => (
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
            <span className="text-xs text-zinc-500 group-hover:text-red-400 transition-colors duration-300 hidden sm:block">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};