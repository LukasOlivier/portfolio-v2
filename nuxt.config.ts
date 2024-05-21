// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Lukas Olivier',
      titleTemplate: '%s - Lukas Olivier',
      meta: [{ name: 'description', content: 'The e-portfolio of Lukas Olivier' }],
      link: [{ rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' }],
    },
  },

  typescript: {
    strict: true,
  },

  site: {
    url: 'https://lukasolivier.be',
    name: 'Lukas Olivier',
    description: 'The e-portfolio of Lukas Olivier',
    defaultLocale: 'en',
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    classSuffix: '',
  },

  image: {
    format: ['webp'],
    quality: 80,
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  css: ['~/assets/css/tailwind.css'],
})
