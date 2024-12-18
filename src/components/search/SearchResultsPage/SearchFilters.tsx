import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { SearchFilters } from '../../../types/search';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (key: keyof SearchFilters, value: string | number) => void;
  onReset: () => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  onReset
}) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
        <h2 className="text-sm font-medium text-white">Filters</h2>
      </div>
      <button
        onClick={onReset}
        className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
        title="Reset filters"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
    </div>

    <div className="space-y-4">
      {/* Status Filter */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Status</label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white"
        >
          <option value="">All</option>
          <option value="publishing">Publishing</option>
          <option value="completed">Completed</option>
          <option value="hiatus">On Hiatus</option>
          <option value="discontinued">Discontinued</option>
        </select>
      </div>

      {/* Type Filter */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Type</label>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white"
        >
          <option value="">All</option>
          <option value="manga">Manga</option>
          <option value="manhwa">Manhwa</option>
          <option value="manhua">Manhua</option>
          <option value="novel">Light Novel</option>
        </select>
      </div>

      {/* Score Range */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">
          Minimum Score: {filters.minScore}
        </label>
        <input 
          type="range" 
          min="0" 
          max="10" 
          step="0.5"
          value={filters.minScore}
          onChange={(e) => onFilterChange('minScore', parseFloat(e.target.value))}
          className="w-full accent-red-400"
        />
        <div className="flex justify-between text-xs text-zinc-500 mt-1">
          <span>0</span>
          <span>10</span>
        </div>
      </div>
    </div>
  </div>
);