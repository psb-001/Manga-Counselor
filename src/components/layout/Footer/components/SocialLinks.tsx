import React from 'react';
import { SOCIAL_LINKS } from '../../../../constants/socialLinks';
import { SocialButton } from './SocialButton';

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-baseline gap-3">
        <h4 className="text-xl font-semibold text-white">Connect With Us</h4>
        <span className="text-sm text-zinc-400 japanese-text">フォローする</span>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-40" />

        <div className="relative bg-zinc-900/40 backdrop-blur border border-zinc-800/60 rounded-2xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {SOCIAL_LINKS.map((socialLink) => (
              <SocialButton key={socialLink.label} {...socialLink} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};