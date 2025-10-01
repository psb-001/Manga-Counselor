import React from 'react';

export const Copyright: React.FC = () => {
  return (
    <div className="py-6 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} MangaCounselor. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
            Support
          </a>
          <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};