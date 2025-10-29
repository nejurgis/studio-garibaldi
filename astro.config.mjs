import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://garibaldi.netlify.app',
  integrations: [],
  i18n: {
    defaultLocale: 'nl',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite', // Changed from 'redirect' to 'rewrite' to preserve hash fragments
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: []
      }
    }
  }
});
