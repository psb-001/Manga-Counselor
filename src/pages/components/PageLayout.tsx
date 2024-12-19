import React, { Suspense } from 'react';
import { Link } from '../../components/common/Link';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-black">
    <nav className="sticky top-0 z-40 border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          href="/"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </nav>
    
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  </div>
);