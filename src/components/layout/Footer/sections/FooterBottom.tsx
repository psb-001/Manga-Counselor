import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { SocialLink } from '../components/SocialLink';
import { FooterLink } from '../components/FooterLink';

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' }
];

const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/sitemap', label: 'Sitemap' }
];

export const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Social Links */}
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-400">
          {footerLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </div>

        {/* Copyright */}
        <div className="md:ml-auto text-sm text-zinc-600 text-center md:text-right whitespace-nowrap">
          © {currentYear} マンガカウンセラー
          <span className="mx-2">•</span>
          <span className="japanese-text">全著作権所有</span>
        </div>
      </div>
    </div>
  );
};