import React from 'react';

export const BottomBar: React.FC = () => {
  return (
    <div className="border-t border-zinc-800/50 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} マンガカウンセラー. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">Privacy</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">Terms</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-red-400 transition-colors">Support</a>
        </div>
      </div>
    </div>
  );
};