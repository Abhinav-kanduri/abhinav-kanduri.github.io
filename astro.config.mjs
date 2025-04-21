// @ts-check
import { defineConfig } from 'astro/config';
import tailwind         from '@astrojs/tailwind';
import mdx              from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc        from 'remark-toc';
import github           from '@astrojs/github';

export default defineConfig({
  // 1. Your canonical site URL for sitemaps, etc.
  site: 'https://abhinav-kanduri.github.io/blog-Abhinav',

  // 2. Base path under which your site will be served
  base: '/blog-Abhinav/',

  // 3. Static output mode + output folder
  output: 'static',
  build: {
    dist: 'docs',           // Astro will emit into /docs
  },

  // 4. Integrations
  integrations: [
    tailwind(),
    mdx(),
    github(),               // <-- GitHub Pages integration
  ],

  // 5. Markdown settings (unchanged)
  markdown: {
    remarkPlugins: [ remarkToc ],
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
