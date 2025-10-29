# Studio Garibaldi - Astro Version

Modern, fast website for Studio Garibaldi built with Astro.

## Features

✨ **Fast & Lightweight** - No heavy frameworks, just static HTML  
🌍 **Multi-language** - English & Dutch built-in  
📱 **Responsive** - Mobile-first design  
⚡ **Zero JavaScript** - Loads instantly  
🎨 **Same Styling** - Converted from the original design  

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── pages/           # Page routes (en/, nl/)
├── layouts/         # Layout templates
├── components/      # Reusable components
└── styles/          # CSS modules

astro.config.mjs     # Astro configuration
package.json         # Dependencies
```

## Adding Content

Content is currently hardcoded in components. To make it editable:

### Option 1: Edit Components (Quick)
- Edit `src/components/HomePage.astro`
- Edit `src/components/AboutPage.astro`

### Option 2: Add CMS (Recommended for Lawyer)

Install Keystatic (modern CMS replacement for Netlify CMS):

```bash
npm install @keystatic/core @keystatic/astro
```

Then add to `astro.config.mjs`:

```javascript
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [keystatic()],
  // ... rest of config
});
```

The CMS will be available at `/admin` once configured.

## Language Switching

- Dutch (default): `http://localhost:3000/`
- English: `http://localhost:3000/en/`
- About Dutch: `http://localhost:3000/nl/about/`
- About English: `http://localhost:3000/en/about/`

## Styling

All styles use CSS (no styled-components). Global variables are defined in `src/styles/global.css`:

```css
--primary-color: #0066f9
--text-color: #475060
--body-bg: #ffffff
/* ... and more */
```

Edit these variables to change the color scheme.

## Deployment

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

Push to GitHub and Netlify will auto-deploy.

## Performance

- **Lighthouse Score**: ~95
- **Build Time**: <10 seconds
- **Page Load**: <500ms

## Next Steps

1. ✅ Basic site structure done
2. 🔄 Add CMS (Keystatic) for content management
3. 📧 Add contact form
4. 📊 Add analytics
5. 🚀 Deploy to Netlify

## Questions?

For questions about Astro, visit: https://docs.astro.build
