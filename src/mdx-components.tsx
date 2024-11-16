import type { MDXComponents } from "mdx/types";

import { mdxStyles } from "./styles/mdx";
import { HeroImage } from "./components/HeroImage";
import { Tweet } from "./components/Tweet";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => (
      <div className={`${mdxStyles} blog-post`}>{children}</div>
    ),
    HeroImage: (props) => <HeroImage {...props} />,
    Tweet: (props) => <Tweet {...props} />,
  };
}
