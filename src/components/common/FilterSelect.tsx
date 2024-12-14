import React from 'react';

interface Option {
  id: string;
  value: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
        placeholder-gray-400"
    >
      <option value="" className="text-gray-400">{placeholder}</option>
      {options.map(option => (
        <option key={option.id} value={option.value} className="text-white bg-zinc-800">
          {option.label}
        </option>
      ))}
    </select>
  );
}