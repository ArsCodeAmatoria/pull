# Deploying Pull alongside Proven

Pull and Proven are separate Next.js apps that share **one Supabase project**
(Postgres + Auth) for both local development and Vercel production.

## One Supabase project (local + production)

| Setting | Local | Vercel |
|---|---|---|
| Supabase project | Shared (`yyuqjmcwqcbahahuetdy`) | Same |
| `NEXT_PUBLIC_SUPABASE_*` / service role | Same keys in each app `.env` | Same keys in each Vercel project |
| Proven `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | `https://proven-saas.vercel.app` |
| Pull `NEXT_PUBLIC_APP_URL` | `http://localhost:3001` | `https://pull-saas.vercel.app` |

Auth callbacks use the request `origin`, so the same code works in both
environments. Supabase must allow every callback URL:

- `http://localhost:3000/callback` / `http://localhost:3001/callback`
- `https://proven-saas.vercel.app/callback`
- `https://pull-saas.vercel.app/callback`

These are listed in Proven's `supabase/config.toml` (`additional_redirect_urls`).
After editing, push with:

```bash
cd ../PROVEN
supabase config push --project-ref yyuqjmcwqcbahahuetdy
```

Or set them in the dashboard: **Authentication → URL Configuration**.

Site URL (primary): `https://proven-saas.vercel.app`

## Shared parent domain for SSO cookies

Deploy both apps under the same root domain, on distinct subdomains, e.g.:

- Proven: `https://app.example.com`
- Pull: `https://learn.example.com`

Supabase's `@supabase/ssr` cookie helpers default to the request host, which
is enough for each app to manage its **own** session independently — Pull
does not require reading Proven's cookies to work. If you want a single
sign-in to cover both apps in the browser (true SSO), set the Supabase
client's cookie `domain` option to the shared parent domain (`.example.com`)
in both apps' `src/lib/supabase/server.ts` / `middleware.ts` cookie config,
and Supabase Auth will read/write the session cookie for both subdomains.

Notes:

- Each app already scopes its own "remember me" cookie separately
  (`proven_remember_me` vs `pull_remember_me`) and its own last-selected
  company cookie (`proven_company_id` vs `pull_company_id`), so there is no
  naming collision even when both run under the same root domain.
- Both apps read the same `UserRole` / `AppAccess` enums from the shared
  Prisma schema. An `Employee.appAccess` of `PULL` or `BOTH` is required for
  any authenticated Pull session — the entire site requires login (only
  `/login`, `/signup`, password reset, and `/callback` are public).
  Enforced in `src/lib/supabase/middleware.ts` and `src/lib/auth/session.ts`.
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` /
  `SUPABASE_SERVICE_ROLE_KEY` must be identical across both apps' env files
  since they point at the same Supabase project.
- Pull runs on port `3001` locally (`npm run dev`) so it can run side by side
  with Proven's `3000` during development.

## Keeping the Prisma schema in sync

Proven is the source of truth for `prisma/schema.prisma`. After changing the
schema in Proven:

```bash
cd ../pull
npm run db:sync-schema   # copies ../PROVEN/prisma/schema.prisma here
npm run db:generate      # regenerates the Prisma client
```
