import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import gruvbox from '@shikijs/themes/gruvbox-dark-medium';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: gruvbox,
    },
  },
});
