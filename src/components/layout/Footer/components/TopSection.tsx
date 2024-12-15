import React from 'react';
import { FooterBranding } from '../sections/FooterBranding';
import { SocialLinks } from './SocialLinks';

export const TopSection: React.FC = () => {
  return (
    <div className="py-8 lg:py-12 border-b border-zinc-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="order-1 lg:order-none">
          <FooterBranding />
        </div>
        <div className="order-2 lg:order-none">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};