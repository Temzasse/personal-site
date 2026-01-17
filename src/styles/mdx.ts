import { css } from "#styled/css";

export const mdxStyles = css({
  "& > p": {
    marginBlock: "$md",
  },
  "& a": {
    color: "$primary1",
    textDecoration: "underline",
    textDecorationSkipInk: "auto",
  },
  "& .lead > p": {
    textStyle: "$bodyLarge",

    "& strong": {
      color: "$primary1",
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
      backgroundColor: "$neutral1",
    },
  },
  "& blockquote": {
    marginBlock: "$md",
    padding: "$md",
    backgroundColor: "$neutral1",
    borderRadius: "$sm",
    borderLeft: "4px solid {colors.$primary1}",

    "& pre": {
      marginTop: "$md",
    },
  },
  "& ul": {
    marginBlock: "$md",
    paddingLeft: "$lg",
  },
  "& ul > li": {
    position: "relative",
    marginBottom: "$xs",
    textStyle: "$body",

    _before: {
      content: '"—"',
      display: "inline-block",
      color: "$primary3",
      position: "absolute",
      marginLeft: "-$lg",
    },
  },
  "& ol": {
    marginBlock: "$md",
    paddingLeft: "$sm",
  },
  "& ol > li": {
    listStyle: "decimal",
  },
  "& code": {
    fontSize: "14px",
    fontFamily: "var(--font-dm-mono), monospace",
  },
  "& p > code, & li > code": {
    padding: "$xs",
    backgroundColor: "$neutral1",
    borderRadius: "$sm",
  },
  "& hr": {
    border: "none",
    height: "1px",
    backgroundColor: "$neutral1",
    marginBlock: "$lg",
  },
  "& .tweet": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
