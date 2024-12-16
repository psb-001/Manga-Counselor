import React from 'react';
import { FooterContainer } from './components/FooterContainer';
import { FooterSection } from './components/FooterSection';
import { FooterGrid } from './components/FooterGrid';
import { FooterBranding } from './sections/FooterBranding';
import { SocialLinks } from './components/SocialLinks';
import { BottomSection } from './components/BottomSection';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection className="border-b border-zinc-800/50">
        <FooterGrid>
          <FooterBranding />
          <SocialLinks />
        </FooterGrid>
      </FooterSection>
      <BottomSection />
    </FooterContainer>
  );
};