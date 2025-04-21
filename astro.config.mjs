// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypePrettyCode, 
        {
          theme: {
            light: 'github-light',
            dark: 'github-dark',
          },
          keepBackground: true,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
        }
      ]
    ],
    shikiConfig: {
      wrap: true,
    }
  },
  site: 'https://genai-data-engineering.com'
});