# Lumina Folio

[![Deploy to Cloudflare][![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/harunnkacan/portfolio-freelance-platform)]

A modern, full-stack React application template powered by Cloudflare Workers. Features a responsive UI with shadcn/ui components, Tailwind CSS, TypeScript, and Hono for API routes. Perfect for portfolios, dashboards, or any web app needing edge deployment.

## ✨ Key Features

- **Full-Stack Ready**: React frontend with Cloudflare Workers backend for API routes.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom theming, dark mode support.
- **Performance Optimized**: Vite bundling, code splitting, and Cloudflare edge caching.
- **Developer Experience**: Hot module replacement, TypeScript, ESLint, TanStack Query.
- **Responsive Layout**: Optional sidebar layout, mobile-first design.
- **API Routes**: Secure CORS-enabled endpoints with Hono router (extend in `worker/userRoutes.ts`).
- **Error Handling**: Global error boundaries and client-side error reporting.
- **Deployment Ready**: One-command deploy to Cloudflare Workers/Pages.

## 🛠️ Tech Stack

| Frontend | Backend | Tools | Styling |
|----------|---------|-------|---------|
| React 18 | Cloudflare Workers | Vite 6 | Tailwind CSS 3 |
| TypeScript 5 | Hono 4 | Bun | shadcn/ui |
| TanStack Query 5 |  | wrangler | Lucide Icons |
| React Router 6 |  |  | clsx & tailwind-merge |

## 🚀 Quick Start

1. **Clone or fork the repo**
2. **Install dependencies**
   ```bash
   bun install
   ```
3. **Start development server**
   ```bash
   bun run dev
   ```
   Opens at `http://localhost:3000` (or your configured `PORT`).

## 📋 Installation & Setup

### Prerequisites
- [Bun](https://bun.sh/) (recommended package manager)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Node.js (optional, Bun preferred)

```bash
# Install dependencies
bun install

# Generate Worker types (if needed)
bun run cf-typegen
```

### Environment Setup
- No required env vars for basic usage.
- Add bindings/secrets via `wrangler.toml` or dashboard for production (KV, D1, R2, etc.).

## 💻 Development

- **Local Dev**: `bun run dev` – proxies API calls to Worker.
- **Preview Build**: `bun run preview`
- **Linting**: `bun run lint`
- **Type Checking**: Included in `tsconfig.json` references.

### Project Structure
```
├── src/              # React app (pages, components, hooks)
├── worker/           # Cloudflare Workers API routes
│   └── userRoutes.ts # Extend your API here
├── shared/           # Shared TS types/utils (future use)
└── public/           # Static assets
```

**Customize UI**: Edit `src/pages/HomePage.tsx` and components in `src/components/`.
**Add API Routes**: Extend `worker/userRoutes.ts` (DO NOT edit `worker/index.ts`).

## 🔧 Usage Examples

### Frontend Data Fetching
```tsx
// In any React component
import { useQuery } from '@tanstack/react-query';

const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/api/todos').then(res => res.json()),
});
```

### Backend API Route
```ts
// worker/userRoutes.ts
import { userRoutes } from './userRoutes';

app.get('/api/todos', (c) => c.json([{ id: 1, title: 'Sample' }]));
```

### Layouts
- Fullscreen: Edit `src/pages/HomePage.tsx`
- Sidebar: Wrap in `<AppLayout>` from `src/components/layout/AppLayout.tsx`

## 🚀 Deployment

Deploy to Cloudflare Workers with zero-config:

```bash
# Build and deploy
bun run deploy

# Or step-by-step
bun run build
npx wrangler deploy
```

### Production Tips
- Assets auto-handled via `wrangler.jsonc`.
- Custom domain: `wrangler deploy --name your-project`.
- Preview deploys: `wrangler deploy --opt preview`.
- Monitoring: Built-in via Cloudflare dashboard.

[![Deploy to Cloudflare][![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/harunnkacan/portfolio-freelance-platform)]

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`bun run dev`).
3. Commit changes (`bun run lint`).
4. Open a Pull Request.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- Issues: GitHub Issues

Built with ❤️ for the Cloudflare ecosystem.