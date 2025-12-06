// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-16',
      htmlAttrs: {
        lang: 'en',
      },
      viewport: 'width=device-width,initial-scale=1',
      title: 'Lukas Olivier - Software Developer',
      titleTemplate: '%s - Lukas Olivier',
      meta: [
        {
          name: 'description',
          content: 'The portfolio of Lukas Olivier - Software Developer',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxthub/core',
  ],

  hub: {
    database: true,
  },

  typescript: {
    strict: true,
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  fonts: {
    families: [
      {
        name: 'Space Grotesk',
        provider: 'none',
        preload: true,
        display: 'swap',
      },
      {
        name: 'Poppins',
        provider: 'none',
        preload: true,
        display: 'swap',
      },
    ],
    providers: {
      google: false,
    },
  },

  site: {
    url: 'https://www.lukasolivier.be', // Needed for og-image
  },

  // Performance

  image: {
    format: ['webp'],
    quality: 100,
  },

  // TailwindCSS
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Content
  content: {
    database: {
      type: 'd1',
      bindingName: 'nuxt-content',
    },

    build: {
      markdown: {
        highlight: {
          // Light and dark mode using Nuxt Color Mode
          theme: 'nord',
        },
      },
    },
  },

  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2024-11-02',
});
