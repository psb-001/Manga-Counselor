import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
    <div className="p-3.5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 
      group-hover:bg-red-500/10 group-hover:border-red-500/20 group-hover:scale-105
      transform-gpu transition-all duration-300 ease-out w-12 h-12 flex items-center justify-center"
    >
      <Icon className="w-5 h-5 text-zinc-300 group-hover:text-red-400 transition-colors duration-300" />
    </div>
    <div className="flex flex-col items-center mt-1">
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="text-xs text-zinc-500 japanese-text">{japanese}</span>
    </div>
  </a>
);