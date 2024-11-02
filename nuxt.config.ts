// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-16",
         htmlAttrs: {
            lang: "en",
         },
         viewport: "width=device-width,initial-scale=1",
         title: "Lukas Olivier",
         titleTemplate: "%s - Lukas Olivier",
         meta: [
            {
               name: "description",
               content: "The e-portfolio of Lukas Olivier",
            },
         ],
      },
   },

   typescript: {
      strict: true,
   },

   colorMode: {
      preference: "system", // default value of $colorMode.preference
      classSuffix: "",
   },

   image: {
      format: ["webp"],
      quality: 100,
   },

   modules: [
      "@nuxt/image",
      "@vueuse/nuxt",
      "@nuxtjs/fontaine",
      "@nuxtjs/color-mode",
      "@nuxtjs/tailwindcss",
      "@nuxt/content",
      "@vueuse/motion/nuxt",
      "@nuxtjs/seo",
      "nuxt-booster",
      "@nuxt/eslint",
      "@nuxt/fonts",
      "nuxt-phosphor-icons",
   ],

   fonts: {
      families: [
         {
            name: "Space Grotesk",
            provider: "none",
            preload: true,
            display: "swap",
         },
         {
            name: "Poppins",
            provider: "none",
            preload: true,
            display: "swap",
         },

         {
            name: "Devicons",
            provider: "none",
            preload: true,
            display: "swap",
         },
      ],
      providers: {
         google: false,
      },
   },

   site: {
      url: "https://www.lukasolivier.be", // Needed for og-image
   },

   content: {
      highlight: {
         theme: "dracula",
      },
      documentDriven: true,
   },

   postcss: {
      plugins: {
         "postcss-import": {},
         "tailwindcss/nesting": {},
         "tailwindcss": {},
         "autoprefixer": {},
      },
   },

   nitro: {
      minify: true,
      compressPublicAssets: true,
   },

   experimental: {
      payloadExtraction: true,
      viewTransition: true,
      renderJsonPayloads: true,
   },

   css: ["~/assets/css/tailwind.css"],
   compatibilityDate: "2024-11-02",
});
