# GatherLoop Conference Website

A single-page, static conference promotion website for **GatherLoop**, built with
**React 18**, **Vite**, and plain **JavaScript** (no TypeScript). There is no backend,
database, payment integration, or server-side code.

> **Status:** Stage 2 handover under review. The site is intentionally
> hosting-agnostic: `npm run build` produces a plain `dist/` folder of HTML, CSS,
> JavaScript and one small SVG. No hosting service, infrastructure or deployment
> workflow is configured in this repository.

## Purpose

The site communicates conference information and routes visitors to ticket
information. It is designed to stay simple to maintain and cheap to host: a burst
of morning traffic is handled by whatever static hosting the team selects in
Stage 2, with no application server to manage.

## For the founder (plain English)

GatherLoop's conference website can be hosted without the company maintaining its
own web server. That means less routine server work for the team and no need to
keep a virtual machine running during the quiet weeks before and after ticket
sales. This approach suits a static information site like this one, even though
visitor numbers may rise sharply on the morning tickets go on sale. Payments,
customer accounts and ticket records are **not** handled by this website; they
must be provided by a ticketing service or a separately designed service.

## Stage 2 handover alignment

The Stage 2 review recommends **Azure Blob Static Website Hosting**, pending
formal Team Lead approval. This website is compatible with that recommendation:

- `npm run build` produces static `index.html`, `404.html`, CSS and JavaScript in `dist/`.
- No server-side code, database, environment variables or secrets are used.
- `base: './'` in `vite.config.js` keeps asset paths portable for the `$web` container.
- No Azure resources, Linux VM, Nginx, custom domain, or GitHub Actions workflow
  are created in this stage.

## Project structure

```
gatherloop-website/
├── index.html              # Vite entry point
├── package.json            # Dependencies and npm scripts
├── npm-shrinkwrap.json     # Locked dependency tree for reproducible installs
├── vite.config.js          # React plugin + relative base path
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Page composition
│   ├── styles.css          # All styling (no CSS framework)
│   ├── data/
│   │   └── content.js      # ALL public copy and placeholder values
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Speakers.jsx
│       ├── Schedule.jsx
│       ├── Tickets.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Placeholder.jsx
├── public/
│   ├── 404.html            # Static error page copied into dist/
│   └── gatherloop-mark.svg # Small inline-friendly logo/favicon
├── screenshots/            # Desktop and mobile verification captures
├── HANDOVER.md             # Notes for the deployment teammate
└── .gitignore
```

All editable copy lives in `src/data/content.js`. Values marked `TBC`,
`to be confirmed`, or rendered with a **Placeholder** badge are not approved
content and must be replaced before launch.

## Run locally

Requires Node.js 18+ (developed with Node 26.5.0 / npm 11.17.0).

```bash
npm ci        # or npm install
npm run dev
```

Open the URL printed in the terminal (normally `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Output: `dist/`. To check the production build locally:

```bash
npm run preview
```

`vite.config.js` sets `base: './'`, so the built assets use relative paths. This
lets the same `dist/` folder be served from a domain root or a subdirectory
without rebuilding.

## Placeholders requiring approved content

- Conference date, venue and city
- Speaker names, roles, biographies and photographs
- Schedule times, session titles and facilitators
- Ticket categories, prices and inclusions
- The approved registration/ticket link (currently a labelled placeholder button)
- Contact email, phone number and social links

No speaker names, credentials, prices or contact details have been invented.

## Important limitations

- The registration button does **not** sell tickets, collect data or process payments.
- No form submissions are sent anywhere.
- No environment variables or secrets are required.
- No Azure resources, Linux VM, Nginx, Blob storage configuration, or GitHub
  Actions workflow are included in this stage.
