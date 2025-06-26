// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

//import {loadEnv} from 'vite';
import dotenv from 'dotenv';
dotenv.config();

//const { IMAGE_DOMAIN } = loadEnv(process.env.NODE_ENV, process.cwd());
const imageDomain = process.env.PUBLIC_IMAGE_DOMAIN || "";
console.log('IMAGE_DOMAIN: ', imageDomain);

// https://astro.build/config
export default defineConfig({
  image: {
    domains:[imageDomain]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
