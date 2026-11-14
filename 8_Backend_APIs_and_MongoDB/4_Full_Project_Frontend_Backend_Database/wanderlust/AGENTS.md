<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack & layout
- Next.js 16.4.3 App Router, React 19.3, TypeScript strict, Tailwind CSS 4. Single app under `src/app`; `@/*` maps to `src/*`.
- README is stale create-next-app boilerplate: the page is `src/app/page.tsx`, not `app/page.tsx`.
- The Next.js frontend is under `src/app`, with shared components in `src/components` and shadcn/Base UI primitives in `src/components/ui`. UI assets are committed under `public/images/` (design source files are in sibling `../wanderlust-resources/`).
- The companion Express/MongoDB backend is in sibling `../wanderlust-server/`, listens on port `8000`, and serves `GET /destinations`, `GET /destination/:id`, `POST /add-destination`, `PATCH /destination/:id`, and `DELETE /destination/:id`.
- Destination list and detail pages fetch data from that backend. Editing is implemented in `src/components/EditDestinationDialog.tsx`; its form Cancel button only closes the edit dialog. Deletion is separate in `src/components/DeleteDestinationDialog.tsx`, shown beside Edit on the destination detail page; confirming deletion calls the backend and navigates to `/destinations`.
- Destination card images use `object-contain` to avoid cropping. Detail-page images preserve their natural aspect ratio and are centered within the content width, capped at 380px tall.
- When changing API-backed destination behavior, keep the frontend request method/path and backend route in sync. Restart the backend after editing `wanderlust-server/index.js`.

## Commands
- `npm run dev` / `npm run build` — Turbopack; `npm run start` serves the build. Build currently succeeds.
- `npm run lint` — bare `eslint` over the repo. Existing generated UI code may have lint issues; lint changed files with `npx eslint <file>` to isolate regressions.
- `npx tsc --noEmit` — typecheck (no `typecheck` script).
- No test runner exists.

## UI conventions
- `components.json` uses shadcn style `base-nova`, built on Base UI (`@base-ui/react`), not Radix. There is no `asChild`: compose triggers with `render={<Button ... />}`. Style state with `data-open` / `data-closed`, not `data-[state=open]`.
- UI files import `cn` from the `"cn"` package; `src/lib/utils.ts` only re-exports it.
- Tailwind 4 is config-less: tokens and variants live in `src/app/globals.css` (`@theme inline`). The `*.css` rule in `next.config.ts` loads CSS through `@tailwindcss/turbopack`.
- Add primitives with the local CLI: `npx shadcn add <name>` (4.23.0, reads `components.json`).

## Next.js 16 rendering
- Current `next.config.ts` sets `cacheComponents: false` and `partialPrefetching: false`; check the actual config before applying Cache Components-specific constraints.
- `reactCompiler: true` is enabled; ESLint's `react-hooks` rules are strict (source of the two baseline errors).

## Gotchas
- Git root is the `Full-Stack` workspace root, not this folder, and contains many unrelated course projects. `git add -A` stages all of them; stage explicit paths inside this folder.
- `src/lib/highlighter.tsx` (Shiki) and `src/hooks/use-highlighted-code.ts` exist but are not wired into any component; `CodeBlock` renders plain markup. The highlighter only supports languages/aliases registered in its maps.
