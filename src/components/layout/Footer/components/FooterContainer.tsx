import React from 'react';

interface FooterContainerProps {
  children: React.ReactNode;
}

const FooterGradient: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
  </div>
);

export const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return (
    <footer className="mt-auto bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800/50">
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 lg:py-8">
            {children}
          </div>
          <FooterGradient />
        </div>
      </div>
    </footer>
  );
};