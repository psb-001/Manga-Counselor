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
    className="group inline-flex items-center gap-3 px-4 py-2 rounded-full
      bg-zinc-800/60 border border-zinc-700/50 backdrop-blur-sm
      hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300
      text-zinc-300 hover:text-red-300"
    aria-label={label}
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full 
      bg-zinc-900/60 border border-zinc-700/40 group-hover:bg-red-500/10 
      transition-colors duration-300">
      <Icon className="w-4 h-4" />
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-[11px] text-zinc-500 japanese-text">{japanese}</span>
    </span>
  </a>
);