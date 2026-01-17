import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "github.com" }],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      'rehype-slug',
      'rehype-autolink-headings',
      ['@shikijs/rehype', { theme: "catppuccin-mocha" }],
    ],
  },
});

export default withMDX(nextConfig);
