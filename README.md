MangaCounselor
===============

Modern manga discovery and recommendations app built with React + Vite + TypeScript and Tailwind CSS.

Features
- Discover, Popular, and Read Later tabs
- Local storage persistence for Read Later (`manga-readlater`)
- Search with suggestions and filters
- Footer with legal pages (Privacy Policy, Terms of Service, Cookie Policy)

Tech Stack
- React 18, TypeScript, Vite
- Tailwind CSS
- lucide-react icons

Getting Started
1) Install
```bash
npm install
```

2) Run dev server
```bash
npm run dev
```

3) Build
```bash
npm run build
npm run preview
```

Environment
- API configuration lives in `src/config/api.config.ts`. Ensure `BASE_URL` points to your API.

Deployment (GitHub Pages)
Option A: User/Org site (simplest)
1. Push the repo to GitHub.
2. Build locally: `npm run build` → outputs `dist/`.
3. Install gh-pages: `npm i -D gh-pages`.
4. Add scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
5. Deploy: `npm run deploy`.
6. In GitHub → Settings → Pages → set Source to the `gh-pages` branch.

Option B: Project site under a subpath (username.github.io/repo)
- Set `base` in `vite.config.ts`:
```ts
export default defineConfig({
  base: '/manga-recommender/',
  plugins: [react()],
});
```
- Then follow steps 1–6 above.

License
MIT © 2025 MangaCounselor contributors


