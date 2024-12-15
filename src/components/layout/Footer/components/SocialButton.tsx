import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  japanese: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon: Icon,
  label,
  href,
  japanese
}) => (
  <a
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
      transition-colors duration-300 hidden sm:block japanese-text">
      {japanese}
    </span>
  </a>
);