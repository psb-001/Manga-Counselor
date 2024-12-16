import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterGrid } from './FooterGrid';
import { FooterBranding } from '../sections/FooterBranding';
import { SocialLinks } from './SocialLinks';

export const TopSection: React.FC = () => {
  return (
    <FooterSection className="border-b border-zinc-800/50">
      <FooterGrid>
        <FooterBranding />
        <SocialLinks />
      </FooterGrid>
    </FooterSection>
  );
};