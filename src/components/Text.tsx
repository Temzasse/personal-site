import { type CSSProperties, type HTMLAttributes, memo } from "react";

import { type TokenName } from "#utils/styled-system";
import { type UtilityValues } from "#styled/types/prop-type";
import { type ColorToken, token } from "#styled/tokens";
import { cva, cx } from "#styled/css";

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
            : token.var(`colors.$${color}`),
      }}
    >
      {children}
    </Element>
  );
}

type TypographyVariant = TokenName<UtilityValues["textStyle"]>;

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
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
};

const styles = cva({
  base: { margin: "0px", maxWidth: "100%" },
  variants: {
    variant: {
      code: { textStyle: "$code" },
      body: { textStyle: "$body" },
      bodySmall: { textStyle: "$bodySmall" },
      bodyLarge: { textStyle: "$bodyLarge" },
      heading1: { textStyle: "$heading1" },
      heading2: { textStyle: "$heading2" },
      heading3: { textStyle: "$heading3" },
    },
  },
});

export const Text = memo(TextBase);
