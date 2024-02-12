import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  outdir: "src/styled-system",
  shorthands: false,
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  jsxFramework: "react",
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    tokens: {
      spacing: {
        none: { value: rem(0) },
        xxs: { value: rem(2) },
        xs: { value: rem(4) },
        sm: { value: rem(8) },
        md: { value: rem(16) },
        lg: { value: rem(24) },
        xl: { value: rem(32) },
        "2xl": { value: rem(40) },
        "3xl": { value: rem(48) },
        "4xl": { value: rem(56) },
        "5xl": { value: rem(64) },
        "6xl": { value: rem(72) },
      },
      radii: {
        none: { value: "0px" },
        xxs: { value: "2px" },
        xs: { value: "4px" },
        sm: { value: "8px" },
        md: { value: "16px" },
        lg: { value: "24px" },
        full: { value: "9999px" },
      },
      colors: {
        primary: {
          1: { value: "#10b981" },
          2: { value: "#059669" },
          3: { value: "#047857" },
          4: { value: "#065f46" },
          5: { value: "#064e3b" },
          6: { value: "#022c22" },
        },
        secondary: {
          1: { value: "#f0abfc" },
          2: { value: "#e879f9" },
          3: { value: "#d946ef" },
          4: { value: "#c026d3" },
          5: { value: "#a21caf" },
          6: { value: "#86198f" },
        },
        neutral: {
          1: { value: "#71717a" },
          2: { value: "#52525b" },
          3: { value: "#3f3f46" },
          4: { value: "#27272a" },
          5: { value: "#18181b" },
          6: { value: "#09090b" },
        },
        focusRing: {
          value: "rgba(16, 185, 129, 0.5)",
        },
        hoverHighlight: {
          value: "rgba(255, 255, 255, 0.05)",
        },
        pressHighlight: {
          value: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
  utilities: {
    paddingHorizontal: {
      className: "padding-horizontal",
      values: "spacing",
      transform(value) {
        return {
          "padding-left": value,
          "padding-right": value,
        };
      },
    },
    paddingVertical: {
      className: "padding-vertical",
      values: "spacing",
      transform(value) {
        return {
          "padding-top": value,
          "padding-bottom": value,
        };
      },
    },
    focusRing: {
      className: "focus-ring",
      transform(_, { token }) {
        return {
          "&:focus-visible": {
            "box-shadow": `0px 0px 0px 2px ${token("colors.$focusRing")}`,
          },
        };
      },
    },
    hoverHighlight: {
      className: "hover-highlight",
      transform(_, { token }) {
        return {
          "&:after": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0,
            backgroundColor: token("colors.$hoverHighlight"),
            transition: "opacity 50ms linear",
            borderRadius: "inherit",
            pointerEvents: "none",
          },
          "&:hover": {
            "&:after": {
              opacity: 1,
            },
          },
        };
      },
    },
    pressHighlight: {
      className: "press-highlight",
      transform(_, { token }) {
        return {
          "&:after": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0,
            backgroundColor: token("colors.$pressHighlight"),
            transition: "opacity 50ms linear",
            borderRadius: "inherit",
            pointerEvents: "none",
          },
          "&:active": {
            "&:after": {
              opacity: 1,
            },
          },
        };
      },
    },
    pressOpacity: {
      className: "press-opacity",
      transform() {
        return {
          opacity: 1,
          transition: "opacity 50ms linear",
          "&:active": {
            opacity: 0.7,
          },
        };
      },
    },
  },
  hooks: {
    "tokens:created": ({ configure }) => {
      configure({
        formatTokenName: (path) => {
          return "$" + path.join(".");
        },
      });
    },
  },
});

function rem(px: number) {
  return `${px / 16}rem`;
}
