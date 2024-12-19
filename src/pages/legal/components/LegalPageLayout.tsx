import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from '../../../components/common/Link';

interface LegalPageLayoutProps {
  title: string;
  japaneseTitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  japaneseTitle,
  icon: Icon,
  children
}) => (
  <div className="min-h-screen bg-black">
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-block text-zinc-400 hover:text-white mb-6 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-red-400" />
          <h1 className="text-3xl font-bold text-white">
            {title}
            <span className="text-sm text-zinc-400 ml-3 japanese-text">
              {japaneseTitle}
            </span>
          </h1>
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8">
        {children}
      </div>
    </div>
  </div>
);