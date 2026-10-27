<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack
- Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4
- shadcn/ui (style `base-nova`, RSC, lucide icons). Components go via `npx shadcn@latest add <component>` into `components/ui/` per `README.md`
- Path aliases: `@/*` -> `./*` (tsconfig). shadcn aliases map `@/components`, `@/components/ui`, `@/lib`, `@/hooks`, `@/lib/utils`.

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint (flat config: `next/core-web-vitals` + `next/typescript`, ignores `.next/`, `out/`, `build/`, `next-env.d.ts`)
- `npm run typecheck` — `tsc --noEmit` (strict)
- `npm run format` — Prettier write for `**/*.{ts,tsx}` (with `prettier-plugin-tailwindcss`)

## Conventions
- Import UI from `@/components/ui/...` and utils from `@/lib/utils` (cn). Check `components.json` if adding components.
- App Router under `app/` (`app/globals.css` referenced by shadcn). Generated types live in `.next/types/`.
- JSX runtime is `react-jsx`; `moduleResolution: bundler`. Keep imports ESM-compatible (`"type": "module"`).
- Prefer running `lint` then `typecheck` for quick verification (no test script present).

## Notes
- `next.config.ts` is minimal (empty). `next-env.d.ts` is present.
- If you need Next.js API details that differ from training data, consult `node_modules/next/dist/docs/` as noted above.