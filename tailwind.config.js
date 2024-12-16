/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};