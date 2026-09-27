# FIMMICK — Build Your AI Workforce

Source mirror for the FIMMICK AI Workforce website, an enterprise AI transformation experience built for companies operating across Asia.

- Live site: <https://fimmick-ai-workforce-copy.laichiwillyjp.chatgpt.site>
- GitHub mirror: <https://github.com/YNWAforever/fimmick-newsitegpt>
- Primary language: English
- Production release target: ChatGPT Sites

## What this site includes

- A cinematic AI Workforce homepage
- Enterprise mega navigation across Platform, AI Transformation, Services, Industries, Case Studies, Insights, and About
- Seven platform capability experiences
- Fifteen service pathways
- Eight industry solution pages
- Case studies, knowledge-hub articles, events, workshops, ecosystem, contact, and legal pages
- An internal launch plan and GitHub engineering report under `/launch-plan`

## Technology

- Next.js 16 App Router
- React 19
- Vinext and Vite
- Cloudflare Worker-compatible server output
- TypeScript and CSS
- Optional Drizzle/D1 starter bindings retained for future hosted data needs

## Local development

Prerequisites: Node.js 22.13 or newer, npm, Linux or a compatible shell environment.

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
npm test
```

## Release model

GitHub is the source mirror and review location for this project. Production releases continue through validated Sites checkpoints. A GitHub push does not independently publish the live site.

The tracked `.openai/hosting.json` file contains the opaque Sites project identity and logical resource bindings; it does not contain deployment credentials. Never commit local environment values, access tokens, generated runtime folders, dependency folders, or build output.

## Project structure

```text
app/                   Routes, content data, components, metadata, and styles
public/                Brand assets, video loops, poster, and social preview
scripts/               Bounded install and verified build helpers
tests/                 Rendered-worker verification
db/                    Optional D1/Drizzle access layer
.openai/hosting.json   Sites project identity and logical bindings
```

## Ownership

FIMMICK owns the website content and source in this repository. Use pull requests for material changes and keep the established legacy FIMMICK website repository intact until any required content, locale, analytics, form, redirect, and runtime parity work is explicitly approved.
