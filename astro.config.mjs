// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import remark from '@astrojs/markdown-remark';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc from 'remark-toc';

export default defineConfig({
  site: 'https://abhinav-kanduri.github.io',
  base: '/',
  output: 'static',
  // We’ll use the default “dist” folder:
  // build: { dist: 'docs' },  <-- remove or comment out if present

  integrations: [
    tailwind(),
    mdx(),
    remark(),
    // github(),  <-- remove this line if present
  ],

  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: 'github-light', dark: 'github-dark' },
          keepBackground: true,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
        },
      ],
    ],
    shikiConfig: { wrap: true },
  },
});
