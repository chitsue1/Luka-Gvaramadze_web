# Luka Gvaramadze — portfolio

Bilingual (English / Georgian) portfolio built with Next.js 14, TypeScript and Tailwind CSS.

## Edit the content

All text lives in `lib/content.ts`, with English and Georgian side by side. Projects, skills, education and contact details are all there; you don't need to touch the components to update the site.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Import the repo on Vercel and use the default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` to the final domain so link previews work.

## Before publishing, check

- [ ] Links for compas.ge and vaka.ge are live
- [ ] vaka.ge stack in `lib/content.ts` is accurate
- [ ] Add GitHub repo links to projects that have public repos
- [ ] Replace `public/luka.jpg` with a clear headshot (no sunglasses)

The previous HTML site is kept in `public/lab/`, so the old pages still open at `/lab/...`.
