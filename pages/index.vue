<script setup>
  useHead({
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to my personal website. Here you will find information about me, my projects, my blog, and my company Izybit.',
      },
    ],
  });
</script>

<template>
  <main>
    <MainHero />
    <LazyMainAbout />
  </main>
</template>
