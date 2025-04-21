// @ts-check
import { defineConfig } from 'astro/config';
import tailwind         from '@astrojs/tailwind';
import mdx              from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc        from 'remark-toc';

export default defineConfig({
//  site: 'https://genai-data-engineering.com'
  // your user‑page URL
  site: 'https://abhinav-kanduri.github.io',

  // serve from root
  base: '/',

  // static output into docs/
  output: 'static',
  build: { dist: 'docs' },

  integrations: [
    tailwind(),
    mdx(),
          // <-- add this
  ],

  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypePrettyCode,
        { /* your existing config */ }
      ]
    ],
    shikiConfig: { wrap: true }
  }
});
