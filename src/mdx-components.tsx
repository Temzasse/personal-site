import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

import { mdxStyles } from "./styles/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => <div className={mdxStyles}>{children}</div>,
    Image: (props) => {
      return (
        <div className="hero">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image fill sizes="100vw" {...(props as ImageProps)} />
        </div>
      );
    },
  };
}
