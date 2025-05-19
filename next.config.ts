import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const withMDX = createMDX({
  // Add MDX options if needed
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Add 'md' and 'mdx'
  // experimental: {
  //   appDir: true, // Already implied by the structure
  // },
};

export default withMDX(nextConfig);
