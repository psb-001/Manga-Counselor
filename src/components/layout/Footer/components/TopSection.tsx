import React from 'react';
import { FooterBranding } from '../sections/FooterBranding';
import { SocialLinks } from '../sections/SocialLinks';
import { FooterNewsletter } from '../sections/FooterNewsletter';

export const TopSection: React.FC = () => {
  return (
    <div className="py-12 lg:py-16 border-b border-zinc-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FooterBranding />
            <div className="hidden lg:block">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div>
          <FooterNewsletter />
        </div>
      </div>
    </div>
  );
};