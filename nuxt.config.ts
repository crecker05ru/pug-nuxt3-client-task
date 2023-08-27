// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/app.scss"],
  modules: [
    '@pinia/nuxt',
    'vue3-carousel-nuxt'
  ],
})
