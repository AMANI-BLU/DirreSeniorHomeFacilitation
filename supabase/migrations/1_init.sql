-- Supabase SQL schema for Dirre Seniors Home
-- Run this in the Supabase SQL editor or with the Supabase CLI.

create table if not exists site_content (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Seed the site rows if desired.
insert into site_content (id, data)
values (
  'site-content',
  jsonb_build_object(
    'version', 3,
    'posts', jsonb '[]',
    'pages', jsonb '{}'
  )
)
on conflict (id) do nothing;
