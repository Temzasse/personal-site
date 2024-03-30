import { css } from "@/css";

export const mdxStyles = css({
  "& > p": {
    marginVertical: "$md",
  },
  "& a": {
    color: "$primary.1",
    textDecoration: "underline",
    textDecorationSkipInk: "auto",
  },
  "& .lead > p": {
    textStyle: "$bodyLarge",

    "& strong": {
      color: "$primary.1",
    },
  },
  "& h1": {
    marginBottom: "$2xl",
  },
  "& h2": {
    marginTop: "$4xl",
    marginBottom: "$lg",
  },
  "& h3": {
    marginTop: "$2xl",
    marginBottom: "$lg",
  },
  "& pre": {
    padding: "$md",
    borderRadius: "$sm",
    overflow: "auto",
    maxWidth: "100%",

    "&:not(.shiki)": {
      backgroundColor: "$neutral.1",
    },
  },
  "& blockquote": {
    padding: "$md",
    backgroundColor: "$neutral.1",
    borderRadius: "$sm",
    borderLeft: "4px solid {colors.$primary.1}",
  },
  "& ul": {
    marginVertical: "$md",
    paddingLeft: "$lg",
  },
  "& li": {
    position: "relative",
    marginBottom: "$xs",
    textStyle: "$body",

    _before: {
      content: '"—"',
      display: "inline-block",
      color: "$primary.3",
      position: "absolute",
      marginLeft: "-$lg",
    },
  },
  "& code": {
    fontSize: "14px",
    fontFamily: "var(--font-dm-mono), monospace",
  },
  "& p > code": {
    padding: "$xs",
    backgroundColor: "$neutral.1",
    borderRadius: "$sm",
  },
  "& hr": {
    border: "none",
    height: "1px",
    backgroundColor: "$neutral.1",
    marginVertical: "$lg",
  },
});
