<script setup>
const age = new Date().getFullYear() - 2003;

const description = `Lukas Olivier: I am a ${age}-year-old software engineering student, deeply passionate about programming and technology.`;
const ogTitle = "Lukas Olivier - Software Engineering Student";
const twitterDescription = `Lukas Olivier: I am a ${age}-year-old software engineering student, deeply passionate about programming and technology.`;
const image =
   "https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp";
const mySite = "https://lukasolivier.be";
useHead({
   htmlAttrs: {
      lang: "en",
   },
   link: [{ rel: "canonical", href: "https://lukasolivier.be" }],
   meta: [
      {
         name: "description",
         content: description,
      },
      // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
      { property: "og:site_name", content: mySite },
      { property: "og:type", content: "website" },
      {
         property: "og:url",
         content: mySite,
      },
      {
         property: "og:title",
         content: ogTitle,
      },
      {
         property: "og:description",
         content: description,
      },
      {
         property: "og:image",
         content: image,
      },
      // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
      { name: "twitter:site", content: "@qdnvubp" },
      { name: "twitter:card", content: "summary_large_image" },
      {
         name: "twitter:url",
         content: mySite,
      },
      {
         name: "twitter:title",
         content: ogTitle,
      },
      {
         name: "twitter:description",
         content: twitterDescription,
      },
      {
         name: "twitter:image",
         content: image,
      },
   ],
});
</script>

<template>
   <div class="bg-[#F1F2F4] dark:bg-slate-950 dark:text-zinc-300">
      <NuxtLoadingIndicator />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>

<style>
html.dark {
   color-scheme: dark;
}
</style>
