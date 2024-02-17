import { defineGlobalStyles } from "@pandacss/dev";

const headingDecoration = {
  content: "''",
  position: "absolute",
  left: "0px",
  height: "1em",
  width: "1px",
  background: "$primary.1",
};

export const globalCss = defineGlobalStyles({
  /* Box sizing rules */
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  /* Set core defaults */
  "html, body": {
    width: "100%",
    height: "100%",
    minHeight: "100%",
    padding: 0,
    backgroundColor: "$background",
    color: "$text.muted",
    fontSize: "16px",
    fontFamily: "var(--font-dm-sans)",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitOverflowScrolling: "touch",
    WebkitTapHighlightColor: "transparent",
    MozTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%",
    textSizeAdjust: "100%",
  },

  h1: {
    color: '$text',
    textStyle: "$heading.1",
    "&:not(.no-decoration)::before": headingDecoration,
  },
  h2: {
    color: '$text',
    textStyle: "$heading.2",
    "&:not(.no-decoration)::before": headingDecoration,
  },
  h3: {
    color: '$text',
    textStyle: "$heading.3",
    "&:not(.no-decoration)::before": headingDecoration,
  },
  p: {
    textStyle: "$body",
  },

  /* Remove default link styling since for web apps links are styled differently */
  a: {
    color: "inherit",
    textDecoration: "none",
  },

  /* Lists in web apps should not look like bullet lists by default */
  "ul, ol": {
    padding: 0,
    listStyle: "none",
  },

  li: {
    listStyle: "none",
  },

  /* Make images easier to work with */
  "img, picture": {
    maxWidth: "100%",
    display: "block",
  },

  /* Inherit fonts for inputs and buttons and reset default styles */
  "input, button, textarea, select": {
    font: "inherit",
  },

  /* By default buttons should not be styled since we use Miranda for buttons */
  button: {
    border: "none",
    background: "none",
    outline: "none",
    padding: 0,
    cursor: "pointer",
  },

  /* Avoid text overflows */
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
});
