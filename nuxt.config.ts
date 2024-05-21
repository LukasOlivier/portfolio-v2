// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Lukas Olivier',
      titleTemplate: '%s - Lukas Olivier',
      meta: [{ name: 'description', content: 'The e-portfolio of Lukas Olivier' }],
      link: [
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }, // Replace the href with the appropriate Font Awesome URL
      ],
    },
  },

  nitro: {
    static: true,
  },

  target: 'static',

  build: {
    analyze: true,
  },

  ssr: true,

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

  generate: {
    routes: [
      '/blogs/00-incaso',
      '/blogs/01-seo',
      '/blogs/02-combell',
      '/blogs/03-hackthefuture',
      '/blogs/04-brandy',
      '/blogs/05-deno-openapi',
      '/blogs/06-lieven-ai',
      '/blogs/07-vti',
      '/blogs/08-flutter',
    ],
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  css: ['~/assets/css/tailwind.css'],
})
