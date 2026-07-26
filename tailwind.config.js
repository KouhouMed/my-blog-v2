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
        sans:    ["Geist", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Geist", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Single accent (amber). `secondary`/`warning`/`terminal` are aliases kept
        // for backwards-compat with blog/labs templates; they intentionally resolve
        // to the same accent so the palette stays single-hue.
        primary:          "#e8a33d",
        primaryBright:    "#f2b95c",
        primaryDim:       "#8a6220",
        secondary:        "#e8a33d",
        warning:          "#e8a33d",
        terminal:         "#e8a33d",

        bg:               "#0b0d11",
        surface:          "#12151b",
        surfaceHighlight: "#181c24",
        card:             "#12151b",
        darker:           "#12151b",
        border:           "#242a35",
        hairline:         "#1b2029",

        text: {
          main:    "#e6e8ec",
          muted:   "#9aa3b2",
          subtle:  "#6b7484",
          inverse: "#0b0d11",
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        measure: "65ch",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(232,163,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,163,61,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "lift":       "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px -12px rgba(0,0,0,0.8)",
        "inset-hair": "0 1px 0 rgba(255,255,255,0.05) inset",
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
              color:           "#e8a33d",
              textDecoration:  "underline",
              textDecorationStyle: "dotted",
              "&:hover": { color: "#f2b95c" },
            },
            pre:  { backgroundColor: theme("colors.slate.200"), color: theme("colors.gray.700") },
            code: { color: theme("colors.gray.700") },
          },
        },
        invert: {
          css: {
            color: theme("colors.slate.200"),
            a: {
              color:           "#e8a33d",
              textDecoration:  "underline",
              textDecorationStyle: "dotted",
              "&:hover": { color: "#f2b95c" },
            },
            h1: { color: theme("colors.white"),      fontFamily: theme("fontFamily.heading").join(", ") },
            h2: { color: theme("colors.white"),      fontFamily: theme("fontFamily.heading").join(", ") },
            h3: { color: theme("colors.slate.100"),  fontFamily: theme("fontFamily.heading").join(", ") },
            h4: { color: theme("colors.slate.100") },
            h5: { color: theme("colors.slate.100") },
            h6: { color: theme("colors.slate.100") },
            strong:     { color: "#e8a33d" },
            td:         { color: theme("colors.slate.200") },
            blockquote: { color: theme("colors.slate.200"), borderLeftColor: theme("colors.slate.700") },
            pre:        { backgroundColor: theme("colors.slate.800") },
            code:       { color: "#e8a33d" },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
