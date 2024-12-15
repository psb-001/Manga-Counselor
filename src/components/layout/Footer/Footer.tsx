import React from 'react';
import { About } from './sections/About';
import { QuickLinks } from './QuickLinks';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <About />
          </div>

          {/* Quick Links */}
          <div>
            <QuickLinks />
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <SocialLinks />
            <div className="space-y-2">
              <a href="/privacy" className="block text-sm text-zinc-400 hover:text-red-400">Privacy Policy</a>
              <a href="/terms" className="block text-sm text-zinc-400 hover:text-red-400">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} マンガハブ. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-red-400">Support</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-red-400">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};