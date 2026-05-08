# ADR-001: Design Stack Selection

**Date:** 2026-05-08
**Status:** Accepted

## Context
Building a personal portfolio for Ayush Sharma (DevOps Engineer). Requirements specify a static site that deploys as Docker + Nginx on Render.com with no build tooling.

## Decision
Use plain HTML + CSS + vanilla JavaScript. No frameworks, no npm, no bundler.

## Options Considered

### Option A: React / Next.js — Rejected
- Pros: Component model, hot reload, ecosystem
- Cons: Requires build step, contradicts stated "no backend/no build" requirement, overkill for static content

### Option B: Astro static export — Rejected
- Pros: Zero JS by default, component model
- Cons: Still requires npm/Node during development, contradicts requirement

### Option C: Plain HTML/CSS/JS — Chosen
- Pros: Zero dependencies, instant load, works anywhere, trivially containerized, full control
- Cons: Verbose repetitive HTML, no component reuse
- Verdict: The constraint is a requirement, not a limitation. Accepted.

## CSS Theming Decision
Use CSS custom properties for theming instead of a separate dark.css file. Single source of truth for color tokens. Theme switch is a single `data-theme` attribute on `<html>`.

## Particle Library Decision
Implement particles via Canvas API from scratch instead of particles.js or tsParticles. Avoids a 50–200KB third-party dependency for a feature implementable in ~80 lines of vanilla JS.

## Font Decision
Inter via Google Fonts CDN (single request, widely cached). Fallback: `system-ui, -apple-system, sans-serif`.

## Icon Decision
Font Awesome 6 via jsDelivr CDN. Provides brand icons (GitHub, LinkedIn, AWS, Microsoft, X) and UI icons (sun, moon, bars) in a single CSS include. ~30KB gzipped.

## Consequences
- No hot reload — refresh manually or use `python -m http.server`
- All logic in one JS file — acceptable given the feature scope
- Full Font Awesome bundle loads (~100KB, ~30KB gzipped) — acceptable trade-off vs. inline SVGs
