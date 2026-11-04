<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack & layout
- Next.js 16.4.3 App Router, React 19.3, TypeScript strict, Tailwind CSS 4. Single app under `src/app`; `@/*` maps to `src/*`.
- README is stale create-next-app boilerplate: the page is `src/app/page.tsx`, not `app/page.tsx`.
- Frontend-only right now: the home page is built from `src/components/navbar.tsx` and `src/components/banner.tsx`; there are no API routes, database, or auth. UI assets are committed under `public/images/` (raw design files: sibling `../wanderlust-resources/`).

## Commands
- `npm run dev` / `npm run build` — Turbopack; `npm run start` serves the build. Build currently succeeds.
- `npm run lint` — bare `eslint` over the repo. Baseline fails on `src/components/ui/carousel.tsx:98` and `src/hooks/use-mobile.ts:14` (`react-hooks/set-state-in-effect`), both pre-existing in shadcn-generated code. Lint a changed file with `npx eslint <file>` instead of treating the global failure as your regression.
- `npx tsc --noEmit` — typecheck (no `typecheck` script).
- No test runner exists.

## UI conventions
- `components.json` uses shadcn style `base-nova`, built on Base UI (`@base-ui/react`), not Radix. There is no `asChild`: compose triggers with `render={<Button ... />}`. Style state with `data-open` / `data-closed`, not `data-[state=open]`.
- UI files import `cn` from the `"cn"` package; `src/lib/utils.ts` only re-exports it.
- Tailwind 4 is config-less: tokens and variants live in `src/app/globals.css` (`@theme inline`). The `*.css` rule in `next.config.ts` loads CSS through `@tailwindcss/turbopack`.
- Add primitives with the local CLI: `npx shadcn add <name>` (4.23.0, reads `components.json`).

## Next.js 16 rendering
- `cacheComponents: true` + `partialPrefetching: true`: PPR is always on and routes prerender a static shell.
- Exporting `dynamic`, `revalidate`, or `fetchCache` from a route segment errors under Cache Components; `runtime` exports (including `runtime = 'nodejs'`) are unsupported. Use `"use cache"` + `cacheLife`/`cacheTag`, or wrap uncached async/request-time data in `<Suspense>`.
- `reactCompiler: true` is enabled; ESLint's `react-hooks` rules are strict (source of the two baseline errors).

## Gotchas
- Git root is the `Full-Stack` workspace root, not this folder, and contains many unrelated course projects. `git add -A` stages all of them; stage explicit paths inside this folder.
- `src/lib/highlighter.tsx` (Shiki) and `src/hooks/use-highlighted-code.ts` exist but are not wired into any component; `CodeBlock` renders plain markup. The highlighter only supports languages/aliases registered in its maps.
