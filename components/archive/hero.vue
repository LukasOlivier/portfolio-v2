<template>
  <div class=" mx-auto mb-5">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <div v-motion-slide-visible-once-top>
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">
          Welcome to my blog!
        </h1>
        <p class="dark:text-zinc-300">
          Here you will find all the blog posts I have written & published.
        </p>
      </div>
      <div class="scale-50 justify-self-center sm:hidden lg:block">
        <LogoBlog v-motion-slide-visible-once-right />
      </div>
    </div>
  </div>
</template>
