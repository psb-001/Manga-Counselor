import React from 'react';
import { Github, Twitter } from 'lucide-react';

export const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative mt-12 pt-8 border-t border-zinc-800">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 text-sm text-zinc-400">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
        </div>

        <p className="text-sm text-zinc-600">
          © {currentYear} マンガハブ
          <span className="mx-2">•</span>
          <span className="japanese-text">全著作権所有</span>
        </p>
      </div>
    </div>
  );
};