import { CSSProperties, HTMLAttributes, memo } from "react";

import { TokenName } from "@/utils/styled-system";
import { PropertyTypes } from "@/styled-system/types/prop-type";
import { ColorToken, token } from "@/styled-system/tokens";
import { cva, cx } from "@/css";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  variant: TypographyVariant;
  color?: TokenName<ColorToken> | "currentColor";
  as?: AllowedElement;
  align?: CSSProperties["textAlign"];
}

function TextBase({
  as,
  align,
  color = "text",
  variant,
  className,
  children,
}: Props) {
  const Element = as || typographyToElement.body || "p";

  return (
    <Element
      className={cx(styles({ variant }), className)}
      style={{
        textAlign: align,
        color:
          color === "currentColor"
            ? "currentColor"
            : token.var(`$colors.${color}`),
      }}
    >
      {children}
    </Element>
  );
}

type TypographyVariant = TokenName<PropertyTypes["textStyle"]>;

type AllowedElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "b"
  | "em"
  | "i"
  | "p"
  | "small"
  | "span"
  | "strong"
  | "sub";

const typographyToElement: Record<TypographyVariant, AllowedElement> = {
  code: "span",
  body: "p",
  bodySmall: "p",
  bodyLarge: "p",
  "heading.1": "h1",
  "heading.2": "h2",
  "heading.3": "h3",
};

const styles = cva({
  base: {
    margin: "0px",
    maxWidth: "100%",
  },
  variants: {
    variant: {
      code: { textStyle: "$code" },
      body: { textStyle: "$body" },
      bodySmall: { textStyle: "$bodySmall" },
      bodyLarge: { textStyle: "$bodyLarge" },
      "heading.1": { textStyle: "$heading.1" },
      "heading.2": { textStyle: "$heading.2" },
      "heading.3": { textStyle: "$heading.3" },
    },
  },
});

export const Text = memo(TextBase);
