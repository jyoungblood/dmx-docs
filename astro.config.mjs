// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Zalando Sans SemiExpanded',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [800],
      styles: ['normal'],
      subsets: ['latin']
    },
    {
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [300, 400],
      styles: ['normal'],
      subsets: ['latin']
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});