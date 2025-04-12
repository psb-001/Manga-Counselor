import React from 'react';
import { SOCIAL_LINKS } from '../../../../constants/socialLinks';
import { SocialButton } from './SocialButton';

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        Connect With Us
        <span className="text-sm text-zinc-400 japanese-text">フォローする</span>
      </h4>
      
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 
          rounded-2xl blur-xl opacity-50" />
        
        {/* Content */}
        <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 
          rounded-2xl p-8">
          <div className="flex flex-wrap justify-center sm:justify-between gap-8">
            {SOCIAL_LINKS.map((socialLink) => (
              <SocialButton key={socialLink.label} {...socialLink} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};