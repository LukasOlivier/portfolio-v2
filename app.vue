<script setup>
const age = new Date().getFullYear() - 2003;
const description = `Lukas Olivier: I am a ${age}-year-old software engineering student, deeply passionate about programming and technology.`;
const ogTitle = "Lukas Olivier - Software Engineering Student";
const twitterDescription = `Lukas Olivier: I am a ${age}-year-old software engineering student, deeply passionate about programming and technology.`;
const image =
   "https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp";
const mySite = "https://www.lukasolivier.be";

useHead({
   htmlAttrs: {
      lang: "en",
   },
   link: [
      { rel: "canonical", href: "https://www.lukasolivier.be" },
      {
         rel: "preconnect",
         href: "https://cdn.jsdelivr.net",
         crossorigin: "anonymous",
      },
      {
         rel: "dns-prefetch",
         href: "https://cdn.jsdelivr.net",
      },
      {
         rel: "stylesheet",
         href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
         media: "print",
         onload: "this.media='all'",
      },
   ],
   meta: [
      {
         name: "description",
         content: description,
      },
      {
         name: "keywords",
         content:
            "lukas olivier, software engineering, student, programming, technology, nuxt3, vue3, tailwindcss, javascript, typescript, html, css, scss, sass, nodejs, expressjs, github, git",
      },
      { name: "author", content: "Lukas Olivier" },
      { name: "publisher", content: "Lukas Olivier" },
      { property: "og:site_name", content: mySite },
      { property: "og:type", content: "website" },
      { property: "og:url", content: mySite },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { name: "twitter:site", content: "@qdnvubp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: mySite },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: twitterDescription },
      { name: "twitter:image", content: image },
   ],
});
</script>

<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<style>
html.dark {
   color-scheme: dark;
}
::selection {
   background-color: #6c91c2;
   color: #fff;
}
a:hover {
   color: white;
   transition: 0.3s;
   text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
