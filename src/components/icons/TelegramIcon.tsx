import React from 'react';
import { LucideProps } from 'lucide-react';

export const TelegramIcon: React.FC<LucideProps> = (props) => (
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
    <path d="M21.73 3.73L2.77 11.29c-1.3.52-1.3 2.44 0 2.96l4.96 1.98 1.98 4.96c.52 1.3 2.44 1.3 2.96 0l7.56-18.96c.52-1.3-.82-2.64-2.12-2.12z" />
    <path d="M12 19l4.99-4.99" />
  </svg>
);