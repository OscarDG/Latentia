// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@prisma/client']
    },
    define: {
      'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL)
    },
  },
  image: {
    service: passthroughImageService()
  },
  output: 'server',
  adapter: vercel()
});