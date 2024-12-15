import React from 'react';
import { BrandingSection } from './sections/BrandingSection';
import { NavigationLinks } from './sections/NavigationLinks';
import { StatsSection } from './sections/StatsSection';
import { SocialLinks } from './sections/SocialLinks';
import { BottomBar } from './sections/BottomBar';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          {/* Left Column */}
          <div className="space-y-12">
            <BrandingSection />
            <SocialLinks />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8">
            <NavigationLinks />
            <StatsSection />
          </div>
        </div>

        <BottomBar />
      </div>
    </footer>
  );
};