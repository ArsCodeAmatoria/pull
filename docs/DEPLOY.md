# Deploying Pull alongside Proven

Pull and Proven are separate Next.js apps that share one Supabase project
(Postgres + Auth). For a signed-in user to move between the two apps without
re-authenticating, both apps' Supabase auth cookies must be readable from a
common parent domain.

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
  a user to reach any `/curriculum`, `/dashboard`, `/reports`, or `/exams`
  route in Pull — enforced in `src/lib/supabase/middleware.ts` and
  `src/lib/auth/session.ts`.
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
