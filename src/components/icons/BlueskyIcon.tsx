import React from 'react';
import { LucideProps } from 'lucide-react';

export const BlueskyIcon: React.FC<LucideProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 18.5 2 13 6.5 3 12 3z" />
    <path d="M12 7v10" />
    <path d="M8 11l4-4 4 4" />
  </svg>
);