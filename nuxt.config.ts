import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    css: ["~/assets/css/tailwind.css"],
    // ssr: false ,
    build: {
      transpile: ["@headlessui/vue"],
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  });
  