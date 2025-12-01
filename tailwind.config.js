const theme = require("tailwindcss/defaultTheme");
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
  safelist: ['pagination', 'page-item'],
  darkMode: "class", // Keeping this to avoid breaking existing dark: classes immediately, but we will override defaults
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: colors.sky[400], // Brighter for dark mode
        secondary: colors.emerald[400],
        // Semantic colors for Dark Mode only
        bg: colors.slate[950],      // Main background (very dark)
        surface: colors.slate[900],  // Card background
        surfaceHighlight: colors.slate[800], // Hover states
        text: {
          main: colors.slate[100],
          muted: colors.slate[400],
          inverse: colors.slate[900],
        },
        border: colors.slate[800],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            a: {
              color: theme(`colors.sky.600`),
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              "&:hover": {
                color: theme(`colors.sky.800`),
              },
            },
            pre: {
              backgroundColor: theme(`colors.slate.200`),
              color: theme(`colors.gray.700`),
            },
            code: { color: theme(`colors.gray.700`) },
          },
        },
        invert: {
          css: {
            color: theme(`colors.slate.200`),
            a: {
              color: theme(`colors.sky.400`),
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              "&:hover": { color: theme(`colors.sky.300`) },
            },
            h1: { color: theme(`colors.white`), fontFamily: theme('fontFamily.heading') },
            h2: { color: theme(`colors.white`), fontFamily: theme('fontFamily.heading') },
            h3: { color: theme(`colors.slate.100`), fontFamily: theme('fontFamily.heading') },
            h4: { color: theme(`colors.slate.100`), fontFamily: theme('fontFamily.heading') },
            h5: { color: theme(`colors.slate.100`), fontFamily: theme('fontFamily.heading') },
            h6: { color: theme(`colors.slate.100`), fontFamily: theme('fontFamily.heading') },
            strong: { color: theme(`colors.sky.300`) },
            td: { color: theme(`colors.slate.200`) },
            blockquote: {
              color: theme(`colors.slate.200`),
              borderLeftColor: theme(`colors.slate.700`),
            },
            pre: {
              backgroundColor: theme(`colors.slate.800`),
            },
            code: { color: theme(`colors.sky.300`) },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
