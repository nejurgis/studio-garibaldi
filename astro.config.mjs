import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://garibaldi.netlify.app',
  integrations: [],
  i18n: {
    defaultLocale: 'nl',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false, // Disable prefix to avoid redirects
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
