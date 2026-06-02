# Dirre Senior Home Facilitation

React + Vite site for the Dirre Senior Home community care project.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/founder` | Founder |
| `/care-center` | Care Center |
| `/gallery` | Gallery |
| `/support` | Support |
| `/admin` | Content admin (posts, page sections, export/import) |

Static assets live in `public/assets/`. Original HTML files are archived in `legacy/`.

## Admin CMS

Open `/admin` to manage content. Changes save to **localStorage** in your browser and appear on the public site immediately.

- **Posts** — create, edit, publish, or delete news items (published posts show on the homepage).
- **Pages** — edit homepage hero, “Why This Home Matters”, founder preview, support band, and each page’s hero banner.
- **Settings** — export or import JSON backups, or reset to defaults.

For multi-device or production use, export JSON and import on another browser, or connect a hosted API later.
