# Akbar Oktaviadi — Next.js Portfolio

A standalone Next.js App Router project containing the latest English portfolio, its interactive 3D system architecture, and the additional competency certificates verified from LinkedIn.

## Requirements

- Node.js 22.13 or newer (Node.js 22 is specified in `.nvmrc`).
- npm, included with Node.js.
- A browser with WebGL support for the 3D view. A component selector is available when WebGL is unavailable.

## Run locally

From this extracted project folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

No environment variables, API keys, database, or external account connection are required.

## Production

```bash
npm run build
npm start
```

`npm run build` uses the standard Next.js webpack build. `npm start` serves the production build on port 3000. To choose another port, run `npm start -- -p 3001`.

For a Node.js server, keep the `app`, `public`, configuration, dependency, and generated `.next` files together. Run the application under your preferred process manager and HTTPS reverse proxy. This package does not deploy or change the existing hosted portfolio.

## Stack

- Next.js 16.2.6 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 and custom CSS
- Three.js for the interactive architecture diagram
- Radix UI dialog and Lucide icons

Dependency versions are pinned in `package.json`, with a matching `package-lock.json`.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Portfolio layout, navigation, interactions, contact links, and project dialogs |
| `app/scene.tsx` | 3D diagram, component descriptions, data-flow animation, orbit controls, and fallback |
| `app/layout.tsx` | HTML language, page title, description, favicon, and global styles |
| `app/globals.css` | Responsive design, colors, typography, cards, and motion preferences |
| `lib/portfolio-data.ts` | Projects, professional experience, expertise, and certification records |
| `lib/utils.ts` | Shared class-name utility |
| `components/ui/` | Accessible dialog and button primitives |
| `public/CV-AkbarOktaviadi.pdf` | Original supplied CV, preserved in its original language |
| `public/credentials/` | Two university competency certificate images |
| `public/favicon.svg` | Portfolio favicon |
| `vendor/` | Shadcn CSS utilities and their license |

## Edit the content

- Change project descriptions, experience, skills, and professional certifications in `lib/portfolio-data.ts`.
- Change the introduction, education, recognition, university certificate cards, and email/social links in `app/page.tsx`.
- Change diagram component descriptions, nodes, and links in `app/scene.tsx`.
- Change the title and description in `app/layout.tsx`.
- Replace the CV or certificate files under `public/`, retaining the filenames or updating their links.
- Customize the shared theme in the `:root` block and section rules in `app/globals.css`.

## Included functionality

- Responsive desktop and mobile navigation
- Three.js system diagram: client, router, firewall, API service, database, and Linux server
- Clickable component labels, draggable orbit, keyboard orbit, reset, and pause controls
- Backend, Networking, and Security focus controls
- Project detail dialogs and expandable experience entries
- CV download, certificate previews, and source links
- Email copying and direct email, WhatsApp, GitHub, LinkedIn, and Instagram links
- Reduced-motion preference handling and a non-WebGL fallback

## Content and behavior

The system architecture illustrates engineering skills; it is not a live infrastructure monitor. Contact actions open the relevant external service; this project has no mail-sending backend or CMS. The CV contains the original provided information. LinkedIn additions include only publicly verifiable information, not a complete authenticated profile export. Certificate dates indicate when the credentials were earned and do not assert current validity.

## Validation

The export passed a standard Next.js production build and TypeScript checks using the dependency versions declared in this package. The lockfile was resolved and checked locally against the existing dependency graph. A fresh dependency download and browser visual testing were not performed for this export.

You can rerun the checks with:

```bash
npm run typecheck
npm run build
```

## Third-party code and assets

The project uses Next.js, React, Three.js, Tailwind CSS, Radix UI, Lucide, and related utilities under their respective package licenses. The vendored Shadcn stylesheet license is included in `vendor/`. CV and certificate images are Akbar Oktaviadi's portfolio content; retain their attribution and source links.
