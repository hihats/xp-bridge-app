# XP Bridge — Relationships between Values, Principles & Practices

An interactive visualization app for the three-layer structure of Extreme Programming (XP).

- **Values** — Hover to highlight related principles and practices
- **Principles** — Click to reveal the values and practices they bridge
- **Practices** — Hover to trace back up to the underlying values

## Why "Bridge"?

XP's values and principles don't always map one-to-one. For example, the value **Feedback** and the principle **Mutual Benefit** have no direct correspondence. Yet at the practice layer, **Pair Programming** embodies both at once.

| Layer | Element | How Pair Programming connects |
|---|---|---|
| Value | Feedback | Your pair reviews code the instant you write it — the shortest possible feedback loop |
| Principle | Mutual Benefit | Both partners share knowledge, benefiting each other now and the whole team in the future |
| Practice | Pair Programming | A concrete practice that bridges the value and principle above |

Practices act as **bridges** that link values and principles which otherwise appear unrelated. Visualizing these cross-cutting connections is exactly what this app is for.

## Technology Stack

- React 18
- Vite 6
- Custom SVG icons (no external icon dependencies)

## Local Development

```bash
npm install
npm run dev
```

http://localhost:5173

## Deployment

### Option: Vercel (easiest)

**Via CLI:**

```bash
npx vercel
```

The first run will interactively create a project; after that, every `git push` triggers automatic deployment.

**Via Git integration:**

1. Import the repository at [vercel.com/new](https://vercel.com/new)
2. Framework Preset is auto-detected (Vite)
3. Click Deploy

No additional configuration is needed — settings are included in `vercel.json`.

### Option: Cloudflare Pages

**Via CLI:**

```bash
npm run build
npx wrangler pages deploy dist --project-name=xp-bridge
```

**Via Git integration (GitHub Actions):**

1. Create an API Token in the Cloudflare dashboard (select *Edit Cloudflare Workers*)
2. Add the following secrets in GitHub repo Settings → Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Pushing to the `main` branch will automatically run `.github/workflows/cloudflare-pages.yml`

### Option: Manual Deploy

```bash
npm run build
```

Upload the `dist/` directory to any static hosting provider.

## Project Structure

```
xp-bridge-app/
├── index.html              # Entry HTML
├── package.json
├── vite.config.js
├── vercel.json             # Vercel config
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx            # React mount
│   └── App.jsx             # XP Bridge component
└── .github/
    └── workflows/
        └── cloudflare-pages.yml
```

## License

MIT
