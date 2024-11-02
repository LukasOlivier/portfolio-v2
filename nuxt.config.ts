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
   ],
   /*
   generate: {
      routes: [
         "/blogs/00-incaso",
         "/blogs/01-seo",
         "/blogs/02-combell",
         "/blogs/03-hackthefuture",
         "/blogs/04-brandy",
         "/blogs/05-deno-openapi",
         "/blogs/06-lieven-ai",
         "/blogs/07-vti",
         "/blogs/08-flutter",
      ],
   },
*/

   fonts: {
      families: [
         { name: "Space Grotesk", provider: "none" },
         { name: "Poppins", provider: "none" },
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

   css: ["~/assets/css/tailwind.css"],
   compatibilityDate: "2024-11-02",
});
