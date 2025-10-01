import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  const isExternal = /^(https?:)?\/\//.test(href);
  
  if (isExternal) {
    return (
      <a href={href} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <RouterLink to={href} className="hover:text-white transition-colors">
      {children}
    </RouterLink>
  );
};