// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css','@/assets/css/global.css'],
  app: {
    baseURL: '/', // Changes base path
  }, // Include the Tailwind CSS file
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
