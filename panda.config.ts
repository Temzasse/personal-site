import { defineConfig } from "@pandacss/dev";
import { globalCss } from "#styles/global";

export default defineConfig({
  outdir: "src/styled-system",
  importMap: "#styled",
  shorthands: false,
  preflight: true,
  hash: { className: true, cssVar: false },
  include: ["./src/**/*.{ts,tsx}"],
  exclude: ["./src/styled-system/**/*"],
  jsxFramework: "react",
  jsxStyleProps: "none",
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
        primary1: { value: "#10b981" },
        primary2: { value: "#059669" },
        primary3: { value: "#047857" },
        primary4: { value: "#065f46" },
        primary5: { value: "#064e3b" },
        primary6: { value: "#022c22" },
        secondary1: { value: "#f0abfc" },
        secondary2: { value: "#e879f9" },
        secondary3: { value: "#d946ef" },
        secondary4: { value: "#c026d3" },
        secondary5: { value: "#a21caf" },
        secondary6: { value: "#86198f" },
        neutral1: { value: "rgba(150, 150, 150, 0.1)" },
        neutral2: { value: "rgba(150, 150, 150, 0.2)" },
        neutral3: { value: "rgba(150, 150, 150, 0.3)" },
        neutral4: { value: "rgba(150, 150, 150, 0.4)" },
        neutral5: { value: "rgba(150, 150, 150, 0.5)" },
        neutral6: { value: "rgba(150, 150, 150, 0.6)" },
        text: { value: "#ffffff" },
        textMuted: { value: "#cecece" },
        background: { value: "#000c18" },
        focusRing: { value: "rgba(16, 185, 129, 0.5)" },
        hoverHighlight: { value: "rgba(255, 255, 255, 0.05)" },
        pressHighlight: { value: "rgba(255, 255, 255, 0.1)" },
      },
    },
    textStyles: {
      $body: {
        value: {
          fontFamily: "var(--font-dm-sans)",
          fontSize: rem(16),
          lineHeight: "1.5",
        },
      },
      $bodySmall: {
        value: {
          fontFamily: "var(--font-dm-sans)",
          fontSize: rem(14),
          lineHeight: "1.4",
        },
      },
      $bodyLarge: {
        value: {
          fontFamily: "var(--font-dm-sans)",
          fontSize: rem(22),
          lineHeight: "1.5",
        },
      },
      $heading1: {
        value: {
          fontFamily: "var(--font-dm-serif)",
          fontSize: `clamp(${rem(42)}, 5vw, ${rem(64)})`,
          lineHeight: "1.3",
        },
      },
      $heading2: {
        value: {
          fontFamily: "var(--font-dm-serif)",
          fontSize: `clamp(${rem(24)}, 3vw, ${rem(30)})`,
          lineHeight: "1.3",
        },
      },
      $heading3: {
        value: {
          fontFamily: "var(--font-dm-serif)",
          fontSize: `clamp(${rem(20)}, 3vw, ${rem(22)})`,
          lineHeight: "1.3",
        },
      },
      $code: {
        value: {
          fontFamily: "var(--font-dm-mono)",
          fontSize: rem(14),
          lineHeight: "1",
        },
      },
    },
  },
  globalCss,
  utilities: {
    borderGlow: {
      className: "border-glow",
      values: "colors",
      transform(value) {
        return {
          borderImage: `linear-gradient(to right,
            rgba(150, 150, 150, 0.1),
            rgba(150, 150, 150, 0.1) 25%,
            ${value} 50%,
            rgba(150, 150, 150, 0.1) 75%,
            rgba(150, 150, 150, 0.1) 100%
          ) 1`,
        };
      },
    },
    $visuallyHidden: {
      className: "visually-hidden",
      values: { type: "boolean" },
      transform(value: boolean) {
        if (!value) return {};
        return {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: 0,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
        };
      },
    },
    $focusRing: {
      className: "focus-ring",
      values: { type: "boolean" },
      transform(value: boolean, { token }) {
        if (!value) return {};
        return {
          "&:focus-visible": {
            "box-shadow": `0px 0px 0px 2px ${token("colors.$focusRing")}`,
          },
        };
      },
    },
    $hoverHighlight: {
      className: "hover-highlight",
      values: { type: "boolean" },
      transform(value: boolean, { token }) {
        if (!value) return {};
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
          "&:hover": { "&:after": { opacity: 1 } },
        };
      },
    },
    $pressHighlight: {
      className: "press-highlight",
      values: { type: "boolean" },
      transform(value: boolean, { token }) {
        if (!value) return {};
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
          "&:active": { "&:after": { opacity: 1 } },
        };
      },
    },
    $pressOpacity: {
      className: "press-opacity",
      values: { type: "boolean" },
      transform(value: boolean) {
        if (!value) return {};
        return {
          opacity: 1,
          transition: "opacity 50ms linear",
          "&:active": { opacity: 0.7 },
        };
      },
    },
  },
  hooks: {
    "tokens:created": ({ configure }) => {
      configure({
        /**
         * Add $ prefix to token names so that it is clear that they are tokens.
         * Note that the `path` is an array of strings that represent the token path,
         * e.g. ['colors', 'primary'] for colors.primary but it can also be just
         * the token name, e.g. ['primary'] so we only want to add the $ prefix
         * to the last part of the path which is the actual token name.
         */
        formatTokenName: (path) => {
          const last = path[path.length - 1];
          const rest = path.slice(0, -1);
          if (!last && rest.length === 0) return "";
          const name = [...rest, `$${last}`].join(".");
          return name;
        },
      });
    },
  },
});

function rem(px: number) {
  return `${px / 16}rem`;
}
