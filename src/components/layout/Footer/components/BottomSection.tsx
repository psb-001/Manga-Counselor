import React from 'react';
import { FooterLink } from './FooterLink';

const links = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/sitemap', label: 'Sitemap' },
];

export const BottomSection: React.FC = () => {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} マンガハブ
          <span className="mx-2">•</span>
          <span className="japanese-text">全著作権所有</span>
        </p>
      </div>
    </div>
  );
};