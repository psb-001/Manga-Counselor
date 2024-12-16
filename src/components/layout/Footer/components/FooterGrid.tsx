import React from 'react';

interface FooterGridProps {
  children: React.ReactNode;
  columns?: number;
}

export const FooterGrid: React.FC<FooterGridProps> = ({ children, columns = 2 }) => {
  const gridCols = `grid-cols-1 md:grid-cols-${columns}`;
  
  return (
    <div className={`grid ${gridCols} gap-8 lg:gap-12`}>
      {children}
    </div>
  );
};