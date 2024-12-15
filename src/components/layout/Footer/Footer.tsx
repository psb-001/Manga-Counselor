import React from 'react';
import { FooterBranding } from './sections/FooterBranding';
import { FooterNewsletter } from './sections/FooterNewsletter';
import { FooterStats } from './sections/FooterStats';
import { FooterBottom } from './sections/FooterBottom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800/50">
      <div className="relative w-full">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FooterBranding />
              <div className="w-full lg:max-w-md lg:ml-auto">
                <FooterNewsletter />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-12 border-t border-zinc-800/50">
            <FooterStats />
          </div>

          {/* Bottom Section */}
          <FooterBottom />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};