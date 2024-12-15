import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="hover:text-white transition-colors">
      {children}
    </a>
  );
};