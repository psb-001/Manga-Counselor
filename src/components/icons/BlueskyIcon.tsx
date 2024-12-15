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
    <path d="M12 3c-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7V5.7C14.7 4.2 13.5 3 12 3z" />
    <path d="M19.3 8.7c-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z" />
    <path d="M4.7 8.7C3.2 8.7 2 9.9 2 11.4V16c0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z" />
</svg>
);