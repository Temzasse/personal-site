import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { mdxStyles } from "./styles/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => <div className={mdxStyles}>{children}</div>,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
  };
}
