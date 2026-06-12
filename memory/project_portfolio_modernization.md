---
name: portfolio-modernization-progress
description: Ongoing 4-phase Hugo portfolio modernization for Mohamed Kouhou's personal site at kouhoumed.com
metadata:
  type: project
---

Modernizing the Hugo portfolio site at kouhoumed.com. Three of four phases are complete.

**Why:** User wants a sleek "Data/Reliability Engineer" aesthetic — dark theme, terminal accents, data-focused design.

**Completed phases:**
- Phase 1: Assessment — identified aafu theme submodule (effectively unused, layouts/ fully overrides it), found broken duplicate-nested HTML in all section partials, proposed color palette (#050d1a bg, sky-400 primary, emerald-400 secondary, #4ade80 terminal green), proposed JetBrains Mono + Syne + Inter font stack.
- Phase 2: Core setup — tailwind.config.js updated, baseof.html with scroll progress bar, toggleTheme.html (dark/light with localStorage), modernized header (underline-hover nav, moon/sun toggle), terminal aesthetic footer, multi-phrase typing animation in animations.js, fixed all broken section HTML.
- Phase 3: Layouts — hero with terminal window card + grid bg + glow photo ring, skills badge-grid matrix grouped by category (Databases & Infra / Programming / Data & AI), experience timeline as git commit log (pulsing CURRENT badge for Atos role), project glow cards with tech tag chips + Demo/GitHub/Private state buttons, config.yaml expanded with skill categories/icons and project tags.

**Remaining:**
- Phase 4: Image processing (WebP via resources.Get, lazy loading) and OpenGraph/Twitter card meta tags.

**Key architecture decisions:**
- aafu theme submodule left in place (harmless, all layouts/ override it)
- Hugo Pipes + PostCSS (npm) kept — no change to build tooling
- Dark mode is primary; light mode partially supported (header/footer switch, sections remain dark)
- Skills in config.yaml now have `category` and `icon` fields used by where filter in template
- Projects in config.yaml now have `tags`, `demo`, `github` fields

**How to apply:** Before suggesting further changes, check if they conflict with the current Tailwind color system (bg = #050d1a, primary = sky-400, secondary = emerald-400, terminal = #4ade80, warning = amber-400). The `where` function in Hugo templates filters skill/project lists by category/tags.
