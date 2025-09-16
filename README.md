# Manga Recommender

A fast, modern web app that helps you discover and track manga you’ll love. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- Trending, popular, and discovery sections
- Smart filters (genre, decade, rating, etc.)
- Search with suggestions and recommendations
- Read-later list with progress tracking

## Tech Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- ESLint + TypeScript ESLint

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure
```
src/
  components/           # UI components (footer, manga cards, search, etc.)
  pages/                # Top-level pages (about, legal)
  services/             # API services
  hooks/                # Reusable hooks
  constants/            # Static options/configs
  types/                # TypeScript types
  utils/                # Helpers (api, storage, security)
  styles/               # Global styles
```

## Contributing
Pull requests are welcome. Please open an issue first to discuss major changes.

## License
MIT