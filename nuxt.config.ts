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

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    classSuffix: '',
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  css: ['~/assets/css/tailwind.css'],
})
