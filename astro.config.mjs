// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Haskoy',
      cssVariable: '--font-haskoy',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            weight: '100 800',
            style: 'normal',
            src: ['./src/assets/fonts/Haskoy-variable.woff2']
          }
        ]
      }
    },
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
