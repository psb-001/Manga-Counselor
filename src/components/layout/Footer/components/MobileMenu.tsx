import React from 'react';
import { Menu, X } from 'lucide-react';
import { FooterSection } from '../types';

interface MobileMenuProps {
  sections: FooterSection[];
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ sections, isOpen, onToggle }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 z-50 p-3 bg-red-500 rounded-full shadow-lg"
        aria-label="Toggle footer menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 overflow-y-auto">
          <div className="min-h-screen px-6 py-20 space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};