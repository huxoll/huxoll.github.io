# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **johngardner.name**, a Vue 3 application to serve as my private portfolio.

## Architecture

### Frontend (Vue 3 + Vite)

- `src/views/` - Main pages
- `src/components/` - Reusable components
- `src/router/index.js` - Vue Router configuration with search functionality
- **Styling**: Tailwind CSS with custom design system (primary/accent/neutral colors, Inter + Playfair Display fonts)

## Development Commands

### Frontend

```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:5173)
npm run build           # Build for production
npm run test:unit       # Run Vitest unit tests
npm run test:e2e        # Run Playwright E2E tests
npm run lint            # ESLint with auto-fix
npm run format          # Prettier formatting
```

## Key Data Models

TBD.

## Development Workflow

1. **Frontend**: Start with `npm run dev` from root directory
2. **CORS**: Backend configured for frontend ports 5173 and johngardner.name

## Node Version

Requires Node.js `^20.19.0 || >=22.12.0` as specified in package.json engines.
