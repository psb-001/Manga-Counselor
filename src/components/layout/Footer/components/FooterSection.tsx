import React from 'react';

interface FooterSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`py-8 lg:py-12 ${className}`}>
      {children}
    </div>
  );
};