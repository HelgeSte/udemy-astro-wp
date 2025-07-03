// @ts-checkVITE_
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import {loadEnv} from 'vite';
import react from '@astrojs/react';
// The following variabled had to be prefixed with VITE_
const {VITE_IMAGE_DOMAIN} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  image: {
    domains: [VITE_IMAGE_DOMAIN],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});