// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      'nuxt-primevue',
      'nuxt-vuefire',
  ],
  devtools: { enabled: true },
  // primevue: {
  //     /* Options */
  // },
  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    'primeicons/primeicons.css',
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY || '',
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
})
