import React from 'react';
import { LucideCrop as LucideProps } from 'lucide-react';

export const BlueskyIcon: React.FC<LucideProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.4 6.6C20.9 4.2 18.5 2 16.1 2c-1.6 0-3.1.9-4.1 2.4C11 2.9 9.5 2 7.9 2c-2.4 0-4.8 2.2-5.3 4.6-.6 2.8.4 5.4 2.9 7.5l5.5 5.5c.6.6 1.5.6 2.1 0l5.5-5.5c2.4-2.1 3.4-4.7 2.8-7.5z" />
  </svg>
);