import React from 'react';
import { About } from './About';
import { QuickLinks } from './QuickLinks';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <About />
          </div>
          <div className="lg:col-span-3">
            <QuickLinks />
          </div>
          <div className="lg:col-span-2">
            <SocialLinks />
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-100 japanese-text">法的事項</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="group inline-flex items-center text-zinc-400 hover:text-red-400 transition-colors">
                    <span>Privacy Policy</span>
                    <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
                      プライバシー
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/terms" className="group inline-flex items-center text-zinc-400 hover:text-red-400 transition-colors">
                    <span>Terms of Service</span>
                    <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
                      利用規約
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} マンガハブ. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
                Support
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};