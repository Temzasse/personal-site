import { css } from "@/css";

export const mdxStyles = css({
  "& > p": {
    marginVertical: "$md",
  },
  "& h1": {
    marginBottom: "$2xl",
  },
  "& h2": {
    marginTop: "$2xl",
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
  "& ul li": {
    position: "relative",

    "&::before": {
      content: "—",
      display: "inline-block",
      color: "$primary.1",
      position: "absolute",
      marginLeft: "-$lg",
    },
  },
});
