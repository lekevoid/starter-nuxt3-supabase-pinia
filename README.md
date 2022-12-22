# LeKevoid's Nuxt 3 Starter

## What this starter contains

-   Nuxt 3
-   Pinia
-   Supabase with Google Auth
-   Tailwind
-   SASS

## Setup

Make sure to install the dependencies:

```bash
npm install
```

Create a .env file with, at minimum :

```bash
SITE_URL="http://localhost:3000"
SUPABASE_URL="https://<supabase_id>.supabase.co"
SUPABASE_KEY="<supabase_key>"
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Documentations

[Nuxt 3 Directory Structure](https://nuxtjs.org/docs/directory-structure/pages)

[Supabase](https://supabase.com/docs)

[Supabase Auth with Google](https://supabase.com/docs/guides/auth/social-login/auth-google)
