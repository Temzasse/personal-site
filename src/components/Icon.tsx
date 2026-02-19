import { type SVGAttributes, memo } from "react";

import { type ids } from "./icons-ids";
import { type ColorToken, token } from "#styled/tokens";
import { type TokenName } from "#utils/styled-system";

export type IconName = (typeof ids)[number];

type Props = SVGAttributes<any> & {
  name: IconName;
  color: TokenName<ColorToken> | "currentColor";
  size: number;
};

function IconBase({ name, size, color, style, ...rest }: Props) {
  return (
    <svg
      style={{
        ...style,
        width: size,
        height: size,
        color:
          color === "currentColor"
            ? "currentColor"
            : token.var(`colors.$${color}`),
      }}
      {...rest}
      aria-hidden
    >
      <use href={`/icons-sprite.svg#${name}`} />
    </svg>
  );
}

export const Icon = memo(IconBase);
