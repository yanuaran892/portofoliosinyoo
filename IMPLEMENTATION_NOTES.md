# Hero Section Implementation Notes

## Merge Conflict Resolution

This branch has diverged from `main` intentionally. The conflicts are expected because:

- **Main branch**: Contains a Next.js setup (from initial scaffold)
- **This feature branch**: Contains a complete Vite + React implementation with Hero section

## Resolution Strategy

When merging this branch to main, **keep all changes from this branch** (ours). The implementation replaces the Next.js scaffold with a Vite-based setup.

### Conflicting Files
All conflicts should be resolved by keeping this branch's version:

1. **`.gitignore`** - Keep Vite version (removes Next.js specific ignores)
2. **`README.md`** - Keep Vite version (reflects actual tech stack)
3. **`package.json`** - Keep Vite version (has Vite dependencies, not Next.js)
4. **`package-lock.json`** - Regenerate with `npm install` after accepting package.json changes
5. **`tsconfig.json`** - Keep Vite version (configured for Vite bundler)

### Files to Remove (from main)
These Next.js files should be deleted when merging:
- `next.config.ts`
- `eslint.config.mjs`
- `postcss.config.mjs` (replaced by `postcss.config.js`)
- `src/app/*` (entire directory)
- `src/lib/utils.ts`
- Old components: `Container.tsx`, `FadeIn.tsx`, `Footer.tsx`, `Header.tsx`
- `public/next.svg`, `public/vercel.svg`, etc.

### New Files (from this branch)
- `index.html` - Vite entry point
- `vite.config.ts` - Vite configuration
- `.eslintrc.cjs` - ESLint for React
- `postcss.config.js` - PostCSS for Tailwind
- `tailwind.config.js` - Tailwind configuration
- `tsconfig.node.json` - TypeScript for Vite config
- `src/main.tsx` - React entry point
- `src/App.tsx` - Root component
- `src/index.css` - Global styles
- `src/components/Hero.tsx` - **Hero section implementation**
- `src/vite-env.d.ts` - Vite type definitions

## Verification

All checks pass:
```bash
npm run lint     # ✅ Passes
npm run build    # ✅ Builds successfully
```

## Architecture Decision

The switch from Next.js to Vite was made because:
1. **Simplicity**: Portfolio doesn't need SSR or complex routing
2. **Performance**: Faster dev server and build times
3. **Size**: Smaller bundle size for a simple portfolio
4. **Hero Requirements**: All animation and responsive requirements met with Vite + React

## Hero Section Features ✅

All ticket requirements implemented:
- ✅ Full-screen hero with gradient background
- ✅ Yanuar Nur Alfian's name with gradient effect
- ✅ Title: "Teknik Informatika Semester 7"
- ✅ Tagline and description
- ✅ CTA buttons (Contact Me, Download CV)
- ✅ Background visual accents (animated blobs)
- ✅ Framer Motion animations (staggered entrance)
- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Education highlight (badge + info cards)
- ✅ Accessibility compliant (ARIA labels, semantic HTML, keyboard nav)
- ✅ Smooth animations with proper easing
- ✅ Graceful scaling on small screens
