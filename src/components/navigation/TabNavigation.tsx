import React from 'react';
import { BookOpen, BookmarkIcon, Compass } from 'lucide-react';

export type TabType = 'discover' | 'popular' | 'readlater';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'discover' as const, label: 'Discover', icon: Compass, japanese: '発見' },
    { id: 'popular' as const, label: 'Popular', icon: BookOpen, japanese: '人気マンガ' },
    { id: 'readlater' as const, label: 'Read Later', icon: BookmarkIcon, japanese: '後で読む' },
  ];

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg mb-6">
      <div className="flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${
              activeTab === tab.id
                ? 'text-red-400 border-b-2 border-red-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="font-medium">{tab.label}</span>
            <span className="text-sm text-gray-500 hidden md:inline japanese-text">
              {tab.japanese}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}