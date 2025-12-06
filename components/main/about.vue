<template>
  <section id="about-me">
    <div class="flex w-full flex-col">
      <h2
        class="mb-5 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
      >
        About Me
      </h2>

      <div class="flex md:space-x-40">
        <p class="leading-relaxed flex-1">
          <span class="text-lg block mb-2">Hi there! 👋</span>

          I'm a <span class="highlight">software developer</span> passionate
          about
          <span class="highlight"
            >building fast, modern, and maintainable web applications.</span
          >
          This website is my personal space where I share what I've been working
          on. From personal
          <NuxtLink class="underline font-semibold" to="/projects"
            >projects</NuxtLink
          >
          and small experiments to the occasional
          <NuxtLink class="underline font-semibold" to="/blog"
            >blog post</NuxtLink
          >
          about tech or development in general.
          <br />
          When I'm not coding, I'm probably playing the drums, DJing, running,
          or volunteering as a head animator at KSA Izegem.
        </p>
        <LogoAbout class="w-1/5 hidden md:block" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .highlight {
    font-weight: 600;
  }
</style>
