import { css } from "@/css";

export const mdxStyles = css({
  "& .hero": {
    width: "100%",
    height: "400px",
    borderRadius: "$md",
    marginBottom: "$2xl",
    marginTop: "-10vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "$neutral.1",
    boxShadow: "0px 0px 0px 1px rgba(150, 150, 150, 0.08)",
    "& img": {
      objectFit: "cover",
    },
  },
  "& > p": {
    marginVertical: "$md",
  },
  "& h1": {
    marginBottom: "$2xl",
  },
  "& h2": {
    marginTop: "$4xl",
    marginBottom: "$lg",
  },
  "& pre": {
    padding: "$md",
    borderRadius: "$sm",
    overflow: "auto",
    maxWidth: "100%",
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
});
