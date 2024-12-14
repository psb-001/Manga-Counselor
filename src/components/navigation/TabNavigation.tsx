import React from 'react';
import { BookOpen, BookmarkIcon, Compass } from 'lucide-react';

type TabType = 'popular' | 'readlater' | 'discover';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'discover', label: 'Discover', icon: Compass, japanese: '発見' },
    { id: 'popular', label: 'Popular Manga', icon: BookOpen, japanese: '人気マンガ' },
    { id: 'readlater', label: 'Read Later', icon: BookmarkIcon, japanese: '後で読む' },
  ] as const;

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabType)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${
              activeTab === tab.id
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-600 hover:text-gray-900'
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