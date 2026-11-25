# GatherLoop — Stage 3 handover notes

Prepared for the teammate responsible for Stage 2 infrastructure and deployment.

## 1. Final project folder and entry file

- **Project folder:** `C:\my tools\GitHub\gatherloop-website`
- **Source entry file:** `index.html` (Vite entry point)
- **React entry file:** `src/main.jsx`
- **Built entry file:** `dist/index.html`
- **Required error page:** `dist/404.html` (source: `public/404.html`)
- **GitHub repository and branch:** Not yet supplied. The website owner will
  commit and push the work. A local Git repository has been initialised on branch
  `main` with no commits; no remote is configured and no push was made at this stage.

## 2. Architecture position

The Stage 2 review recommends **Azure Blob Static Website Hosting**, pending
formal Team Lead approval. This website was built to that recommendation and does
not change it. Nothing in this repository provisions Azure resources, configures
Blob storage, sets a custom domain, or creates a GitHub Actions workflow.

Planned deployment target (per Stage 2, not performed here): upload the contents
of `dist/` to the storage account's `$web` container and configure `index.html`
and `404.html` as the static website index/error pages.

## 3. Dependencies and build instructions

- Requires Node.js 18+ (built with Node 26.5.0 / npm 11.17.0).
- Dependencies: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`. No TypeScript.
- `npm-shrinkwrap.json` locks the dependency tree; use `npm ci` for a clean install.
- No CSS framework or icon library is required; all CSS is in `src/styles.css`.

```bash
npm ci        # or npm install
npm run build
```

Deploy the resulting **`dist/` folder contents** (not the source folder). To
verify locally: `npm run preview`.

`vite.config.js` uses `base: './'` so the built assets work from a domain root or
a subdirectory without rebuilding.

## 4. Configuration / environment

- No environment variables, API keys, secrets or config files are required.
- No runtime configuration is needed; the site is entirely static.
- No localhost-only references exist in the built output.
- `public/` contains only intended public files: the logo SVG and the 404 page.

## 5. Open decisions and content placeholders

These must be resolved by the team/client before launch:

1. Conference date, venue and city.
2. Speaker names, roles, approved biographies and photographs (currently marked
   placeholders; no names or credentials were invented).
3. Schedule times, session titles and facilitators.
4. Ticket categories, prices and inclusions.
5. **External ticketing / registration link** — currently a clearly labelled
   placeholder button. No payment or registration system exists.
6. Approved contact email, phone number and social links (`hello@gatherloop.example`
   is an intentionally non-real placeholder domain).
7. Default Blob static website endpoint vs custom domain, including HTTPS/edge
   service approach if a custom domain is chosen.
8. Any unresolved Stage 2 pricing or performance assumptions.

All public copy is centralised in `src/data/content.js` for quick replacement.

## 6. Known limitations

- Static website only: no server-side code, database, user accounts, authentication,
  payment processing or ticket records.
- The registration button does not submit data or process payments.
- There is no contact form; contact details are placeholders.
- Stage 2 remains a plan: no Azure resources, Linux VM, Nginx, Blob configuration,
  custom domain or GitHub Actions workflow were created at this stage.
- Traffic assumptions from Stage 2 are unverified; actual launch-minute peak is
  unknown and must be validated by the infrastructure team.

## 7. Security and access notes

- `$web` content is publicly readable: upload only intended public files.
- Keep repository access controlled; do not commit credentials or access keys.
- GitHub-to-Azure OIDC with least-privilege permissions is planned by the
  infrastructure team, not implemented here.
- Default endpoint and HTTPS behaviour remain open decisions.

## 8. Evidence expected in later stages

The following are **not** produced at this stage and must be captured later:

- Azure provisioning and static website configuration evidence.
- Successful GitHub Actions / OIDC workflow run after a push to `main`.
- Public endpoint test (homepage, assets and 404 page).
- Desktop and mobile browser tests against the deployed URL.
- Rollback steps and final operational documentation.

Where approved content is still missing, the deployed site must retain clear
placeholder labels rather than presenting unverified information as final.
