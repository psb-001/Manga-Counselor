import React from 'react';
import { SOCIAL_LINKS } from '../../../../constants/socialLinks';
import { SocialButton } from './SocialButton';

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
        Connect With Us
        <span className="text-sm text-zinc-400 japanese-text">フォローする</span>
      </h4>
      
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {SOCIAL_LINKS.map((socialLink) => (
          <SocialButton key={socialLink.label} {...socialLink} />
        ))}
      </div>
    </div>
  );
};