import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export const SearchFilters: React.FC = () => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-4">
      <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
      <h2 className="text-sm font-medium text-white">Filters</h2>
    </div>

    <div className="space-y-4">
      {/* Status Filter */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Status</label>
        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white">
          <option value="">All</option>
          <option value="publishing">Publishing</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Type Filter */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Type</label>
        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white">
          <option value="">All</option>
          <option value="manga">Manga</option>
          <option value="manhwa">Manhwa</option>
          <option value="manhua">Manhua</option>
        </select>
      </div>

      {/* Score Range */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Minimum Score</label>
        <input 
          type="range" 
          min="0" 
          max="10" 
          step="0.5"
          className="w-full accent-red-400"
        />
        <div className="flex justify-between text-xs text-zinc-500">
          <span>0</span>
          <span>10</span>
        </div>
      </div>
    </div>
  </div>
);