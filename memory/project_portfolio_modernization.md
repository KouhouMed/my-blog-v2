---
name: portfolio-modernization-progress
description: Hugo portfolio redesign for kouhoumed.com - current design system, layout structure, and hard constraints
metadata:
  type: project
---

The Hugo portfolio at kouhoumed.com was fully redesigned on 2026-07-26 on branch `redesign` (cut from `experiments`, pushed to origin, not yet merged to `master`). This supersedes the earlier 4-phase modernization, whose sky/emerald/amber palette and card-heavy layouts no longer exist.

**Design system (locked):**
- **ONE accent: amber `#e8a33d`** (`primaryBright #f2b95c`, `primaryDim #8a6220`). The tokens `secondary`, `warning`, and `terminal` are deliberate aliases pointing at the same amber so blog/labs templates keep compiling. Do not reintroduce a second hue.
- Base `#0b0d11`, surface `#12151b`, border `#242a35`, hairline `#1b2029`.
- Fonts: Geist (body), Space Grotesk (display/heading), JetBrains Mono (mono).
- Radius: `rounded-md` for controls, `rounded-lg` for cards/media. No pills, no sharp corners.
- Page theme is **locked dark**. Home sections are written dark-only, no `dark:` pairs.
- No glow shadows (`shadow-lift` replaced them), no gradient-text headings.

**Home page = 7 partials, each a different layout family**, called from `layouts/index.html` in order: `hero`, `signal`, `about`, `stack`, `experience`, `projects`, `contact`. `skills.html` was deleted and replaced by `stack.html` (section keeps `id="skills"` for anchor/SEO stability).

**Hard constraints carried from the design skill.** Breaking any of these is a regression:
- Zero em-dashes and en-dashes in user-visible strings.
- Max 2 section eyebrows on the home page (currently experience + projects).
- No section-number eyebrows, no scroll cues, no decorative status dots, no div-built fake terminals or screenshots.
- No `window.addEventListener('scroll')`. Header state uses IntersectionObserver on `#top-sentinel`; the scroll progress bar is pure CSS `animation-timeline: scroll()`.
- `.animate-on-scroll` is gated behind a `.js` class on `<html>` so a JS failure cannot hide the page. `prefers-reduced-motion` reveals everything instantly.

**Config-driven fields templates depend on:** projects use `featured` (bool) and `image` (filename in `assets/images/`) for the featured block; skills use `category` + `icon`; `params.now` feeds the hero caption. Stat values in `signal.html` are computed with `len`/`sub`, never hardcoded.

**Gotcha:** `resources.Get` only reads `assets/`, not the `images/` staticDir. Any image needing Hugo Pipes processing must live in `assets/images/`.

**Known outstanding:** `public/` is gitignored but still tracked, so it shows build churn on every commit; source-only commits are the current workaround. `images/IMG2.png` (6.2MB) is still in the repo but no longer referenced; the hero uses `assets/images/hero-portrait.jpg` instead. The profile photo carries an AI-edit sparkle watermark in its bottom-right corner.

**How to apply:** Before changing home-page visuals, check the change against the constraint list above. See [[portfolio-owner-profile]] for whose site this is.
