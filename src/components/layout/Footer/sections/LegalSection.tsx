import React from 'react';

export const LegalSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-zinc-100 japanese-text">法的事項</h4>
      <ul className="space-y-3">
        <li>
          <a href="/privacy" className="group inline-flex items-center text-zinc-400 hover:text-red-400 transition-colors">
            <span>Privacy Policy</span>
            <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
              プライバシー
            </span>
          </a>
        </li>
        <li>
          <a href="/terms" className="group inline-flex items-center text-zinc-400 hover:text-red-400 transition-colors">
            <span>Terms of Service</span>
            <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
              利用規約
            </span>
          </a>
        </li>
        <li>
          <a href="/cookies" className="group inline-flex items-center text-zinc-400 hover:text-red-400 transition-colors">
            <span>Cookie Policy</span>
            <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
              クッキー
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};