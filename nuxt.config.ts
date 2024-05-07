// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Lukas Olivier',
      titleTemplate: '%s - Lukas Olivier',
      meta: [{ name: 'description', content: 'The e-portfolio of Lukas Olivier' }],
    },
  },

  site: {
    url: 'https://lukasolivier.be',
    identity: {
      type: 'Person',
    },
  },

  typescript: {
    strict: true,
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  css: ['~/assets/css/tailwind.css'],
})
