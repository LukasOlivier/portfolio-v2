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
    <div class="space-y-20 w-4/5 md:w-3/5 mx-auto">
      <MainAbout />
      <MainSkills />
      <MainExperience />
    </div>
  </main>
</template>
