# Supabase setup for Dirre Seniors Home

This project uses Supabase as the backend for site content storage.

## Required database table

Create the following table in your Supabase project:

- `site_content`
  - `id` text primary key
  - `data` jsonb not null
  - `updated_at` timestamptz not null default now()

A sample migration is included in `supabase/migrations/1_init.sql`.

## How to use it

1. Open your Supabase project.
2. Go to the SQL editor.
3. Run the SQL in `supabase/migrations/1_init.sql`.

## Supabase environment

The app reads the following values from `.env`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

If your project uses a service role key later, add it to your deployment environment and keep it secret.

## Notes

- The app still loads default local content if the remote row is missing.
- When admin content is saved, it is pushed to Supabase via the row with id `site-content`.
