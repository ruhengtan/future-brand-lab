create extension if not exists "uuid-ossp";

create table technology_signals (
  id uuid primary key default uuid_generate_v4(), company text not null, industry text not null,
  technology text not null, news text not null, insight text, source text, published_at date not null,
  created_at timestamptz not null default now()
);
create index technology_signals_industry_idx on technology_signals(industry);
create index technology_signals_published_at_idx on technology_signals(published_at desc);

create table campaign_analyses (
  id uuid primary key default uuid_generate_v4(), brand text not null, campaign text not null,
  strategy text, creative_idea text, execution text, learning text,
  created_at timestamptz not null default now()
);

create table robotics_trends (
  id uuid primary key default uuid_generate_v4(), topic text not null,
  category text not null check (category in ('humanoid_robots','embodied_ai','robot_foundation_models')),
  summary text not null, insight text, source text, published_at date not null,
  created_at timestamptz not null default now()
);

create table english_articles (
  id uuid primary key default uuid_generate_v4(), title text not null, url text, content text,
  key_points jsonb not null default '[]', brand_insights jsonb not null default '[]',
  vocabulary jsonb not null default '[]', created_at timestamptz not null default now()
);

create table portfolio_cases (
  id uuid primary key default uuid_generate_v4(), slug text unique not null, title text not null,
  summary text, challenge text, approach text, outcome text, cover_url text,
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

alter table technology_signals enable row level security;
alter table campaign_analyses enable row level security;
alter table robotics_trends enable row level security;
alter table english_articles enable row level security;
alter table portfolio_cases enable row level security;

create policy "Public intelligence is readable" on technology_signals for select using (true);
create policy "Public campaigns are readable" on campaign_analyses for select using (true);
create policy "Public trends are readable" on robotics_trends for select using (true);
create policy "Published portfolio is readable" on portfolio_cases for select using (status = 'published');
