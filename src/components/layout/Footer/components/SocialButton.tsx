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
    className="group flex flex-col items-center gap-2 relative"
    aria-label={label}
  >
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
      
      {/* Icon container */}
      <div className="relative p-3.5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 
        group-hover:bg-red-500/10 group-hover:border-red-500/20 group-hover:scale-110
        transform-gpu transition-all duration-300 ease-out"
      >
        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-400 
          transition-colors duration-300" />
      </div>
    </div>
    
    {/* Label */}
    <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 absolute -bottom-12">
      <span className="text-sm font-medium text-white whitespace-nowrap">{label}</span>
      <span className="text-xs text-zinc-500 japanese-text">{japanese}</span>
    </div>
  </a>
);