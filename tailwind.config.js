const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ["pagination", "page-item"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        heading: ["Syne", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        primary:          colors.sky[400],
        secondary:        colors.emerald[400],
        warning:          colors.amber[400],
        terminal:         "#4ade80",
        // Dark-mode semantic palette
        bg:               "#050d1a",
        surface:          colors.slate[900],
        surfaceHighlight: colors.slate[800],
        darker:           colors.slate[800],   // blog list compat
        card:             colors.slate[800],
        border:           colors.slate[700],
        text: {
          main:    colors.slate[100],
          muted:   colors.slate[400],
          subtle:  colors.slate[600],
          inverse: colors.slate[900],
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
        "glow-primary":
          "radial-gradient(ellipse at center, rgba(56,189,248,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "glow-primary":  "0 0 24px rgba(56,189,248,0.35)",
        "glow-secondary":"0 0 24px rgba(52,211,153,0.35)",
        "glow-sm":       "0 0 10px rgba(56,189,248,0.2)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink:        "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after":  false,
            a: {
              color:           theme("colors.sky.600"),
              textDecoration:  "underline",
              textDecorationStyle: "dotted",
              "&:hover": { color: theme("colors.sky.800") },
            },
            pre:  { backgroundColor: theme("colors.slate.200"), color: theme("colors.gray.700") },
            code: { color: theme("colors.gray.700") },
          },
        },
        invert: {
          css: {
            color: theme("colors.slate.200"),
            a: {
              color:           theme("colors.sky.400"),
              textDecoration:  "underline",
              textDecorationStyle: "dotted",
              "&:hover": { color: theme("colors.sky.300") },
            },
            h1: { color: theme("colors.white"),      fontFamily: theme("fontFamily.heading").join(", ") },
            h2: { color: theme("colors.white"),      fontFamily: theme("fontFamily.heading").join(", ") },
            h3: { color: theme("colors.slate.100"),  fontFamily: theme("fontFamily.heading").join(", ") },
            h4: { color: theme("colors.slate.100") },
            h5: { color: theme("colors.slate.100") },
            h6: { color: theme("colors.slate.100") },
            strong:     { color: theme("colors.sky.300") },
            td:         { color: theme("colors.slate.200") },
            blockquote: { color: theme("colors.slate.200"), borderLeftColor: theme("colors.slate.700") },
            pre:        { backgroundColor: theme("colors.slate.800") },
            code:       { color: theme("colors.sky.300") },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
