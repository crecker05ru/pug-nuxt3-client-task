// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  devtools: { enabled: true },
  css: ["@/assets/styles/app.scss"],
  modules: [
    '@pinia/nuxt',
    'vue3-carousel-nuxt'
  ],
})
