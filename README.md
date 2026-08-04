# Future Brand Lab

A Global Technology × Brand Intelligence System for collecting signals, decoding brand activity, learning from English-language reporting, and publishing strategic case studies.

## Included MVP modules

- Dashboard with daily signals, intelligence metrics and a brand perspective
- Technology intelligence and campaign analysis databases
- AI robotics trend radar
- English Brand Lab with server-side OpenAI article analysis
- Portfolio case-study workspace
- Supabase schema with indexes, validation and row-level security

## Application preview

The MVP is a responsive workspace with a persistent module sidebar on desktop and a
horizontal module switcher on smaller screens. All routes share the same restrained
black, off-white and acid-green visual system.

| Route | What you can preview |
| --- | --- |
| `/` | Daily signal feed, workspace metrics, industry pulse and featured brand insight |
| `/intelligence` | Searchable technology-company table covering AI, robotics and autonomous driving |
| `/campaigns` | Campaign strategy, creative idea, execution and learning database |
| `/robotics` | Trend cards and narrative radar for humanoids, embodied AI and robot foundation models |
| `/english-lab` | Article input and AI-generated key points, brand insights and vocabulary |
| `/portfolio` | Visual portfolio cards with edit and preview actions |

The database screens and dashboard currently use representative data from
`lib/mock-data.ts`. The English Brand Lab is the first live workflow: it calls the
server-only `/api/summarize` endpoint when an OpenAI API key is configured.

## Project structure

```text
future-brand-lab/
├── app/
│   ├── api/summarize/route.ts    # Server-only OpenAI endpoint
│   ├── campaigns/page.tsx        # Campaign Analysis
│   ├── english-lab/page.tsx      # English Brand Lab
│   ├── intelligence/page.tsx     # Technology Intelligence
│   ├── portfolio/page.tsx        # Portfolio Case Studies
│   ├── robotics/page.tsx         # AI Robotics Trends
│   ├── globals.css               # Tailwind layers and shared utility classes
│   ├── layout.tsx                # Root application shell
│   └── page.tsx                  # Dashboard
├── components/
│   ├── article-analyzer.tsx      # Interactive AI analysis client
│   ├── data-table.tsx            # Reusable intelligence table
│   ├── database-page.tsx         # Shared database page layout
│   ├── sidebar.tsx               # Responsive primary navigation
│   └── ui.tsx                    # Header, section heading and tag primitives
├── lib/
│   ├── supabase/client.ts        # Browser Supabase client
│   ├── supabase/server.ts        # Server Supabase client
│   ├── mock-data.ts              # Representative MVP records
│   └── openai.ts                 # OpenAI client and analysis prompt
├── supabase/schema.sql           # Tables, indexes, constraints and RLS
├── .env.example                  # Required environment variable template
└── package.json                  # Scripts and dependencies
```

## Run locally

### Prerequisites

- Node.js 20 or newer
- npm
- An OpenAI API key for live English Brand Lab analysis
- A Supabase project when you are ready to replace the representative data

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create a local environment file
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The interface and all mock-data
pages work without external credentials. To use article analysis, set
`OPENAI_API_KEY` in `.env.local`. To prepare the persistent data layer, fill in the
Supabase variables and run `supabase/schema.sql` in the Supabase SQL editor.

Never expose `OPENAI_API_KEY` or `SUPABASE_SERVICE_ROLE_KEY` through a
`NEXT_PUBLIC_` variable. Restart the development server after changing environment
variables.

### Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

The UI uses representative local data in `lib/mock-data.ts`, so every module is immediately explorable. Replace those imports with Supabase queries through `lib/supabase/server.ts` as data is added.

## Key files by module

| Module | Primary files |
| --- | --- |
| Application shell | `app/layout.tsx`, `components/sidebar.tsx`, `app/globals.css` |
| Dashboard | `app/page.tsx`, `lib/mock-data.ts`, `components/ui.tsx` |
| Technology Intelligence | `app/intelligence/page.tsx`, `components/database-page.tsx`, `components/data-table.tsx` |
| Campaign Analysis | `app/campaigns/page.tsx`, `components/database-page.tsx`, `components/data-table.tsx` |
| AI Robotics Trends | `app/robotics/page.tsx` |
| English Brand Lab | `app/english-lab/page.tsx`, `components/article-analyzer.tsx`, `app/api/summarize/route.ts`, `lib/openai.ts` |
| Portfolio Case Studies | `app/portfolio/page.tsx` |
| Supabase data layer | `supabase/schema.sql`, `lib/supabase/client.ts`, `lib/supabase/server.ts` |
| Configuration | `.env.example`, `package.json`, `tailwind.config.ts`, `tsconfig.json` |

## Implementation path

1. **Authentication:** add Supabase Auth and owner IDs before enabling mutations. Keep service-role credentials server-only.
2. **Data layer:** generate database types, add typed repository functions, then replace mock data incrementally.
3. **Ingestion:** add scheduled source/RSS ingestion, URL normalization, deduplication and editorial review.
4. **AI workflow:** persist analyses, add citations to source paragraphs, rate limits, request logging and moderation.
5. **Portfolio publishing:** add a block editor, media storage, public slug routes, preview and SEO metadata.
6. **Production:** add observability, tests, backups and stricter owner/editor RLS policies before accepting user data.

## API

`POST /api/summarize` accepts `{ "content": "..." }`. The OpenAI key is read only on the server. The response contains `keyPoints`, `brandInsights`, and `vocabulary`.
