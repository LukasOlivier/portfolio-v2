<script setup>
useHead({
   title: "Home",
   meta: [
      {
         name: "description",
         content:
            "Welcome to my personal website. Here you will find information about me, my projects and my blog.",
      },
   ],
   titleTemplate: "Lukas Olivier - %s",
});
</script>

<template>
   <main>
      <MainHero />
      <LazyMainAbout />
      <!-- <LazyMainServices /> Temporary removal until I rewrite the paragraphs -->
   </main>
</template>
