<template>
  <section id="about-me" class="mx-auto flex w-9/12 justify-between py-20">
    <div class="flex w-full flex-col md:w-3/5">
      <h2
        class="mb-5 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
      >
        About Me
      </h2>

      <p class="mb-10 leading-relaxed">
        <span class="text-lg block mb-2">Hi there! 👋</span>

        I'm a <span class="highlight">software developer</span> with a
        Bachelor's degree in
        <span class="highlight"
          >Applied Computer Science / Software Engineering.</span
        >
        I have a soft spot for JavaScript frameworksand enjoy experimenting with
        new ways to build fast, modern, and maintainable web applications. My
        website is simply a place where I share what I've been working on. From
        personal
        <NuxtLink class="underline font-semibold" to="/projects"
          >projects</NuxtLink
        >
        and small experiments to the occasional
        <NuxtLink class="underline font-semibold" to="/blog"
          >blog post</NuxtLink
        >
        about tech or development in general.
        <br />
        When I'm not coding, I'm probably playing the drums, DJing, running, or
        volunteering as a head animator at KSA Izegem.
      </p>

      <h2 class="text-xl font-semibold leading-tight">
        Things I've worked with so far:
      </h2>
      <MainSkills />
    </div>
    <LogoAbout class="hidden w-1/4 md:block" />
  </section>
</template>

<style scoped>
  .highlight {
    font-weight: 600;
  }
</style>
