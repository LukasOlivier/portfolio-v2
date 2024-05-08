<script setup>
import { onMounted, ref } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'

const typeWriterElement = ref(null)

onMounted(() => {
  const typewriter = new Typewriter(typeWriterElement.value, {
    loop: true,
    delay: 25,
  })

  typewriter
    .typeString('Student applied computer science')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Musician')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Head leader of youth movement \'KSA Izegem\'')
    .pauseFor(1000)
    .deleteAll()
    .start()
})
</script>

<template>
  <div class=" flex flex-col h-screen">
    <section
      id="home" class="w-1/3 mx-auto mt-52 "
    >
      <h1 class=" text-black dark:text-white font-semibold leading-tight text-6xl md:text-7xl ">
        Lukas Olivier
      </h1>
      <p
        ref="typeWriterElement" class="
        text-black
        dark:text-white
        text-1xl
        md:text-2xl
        mb-10"
      />

      <button
        class="
        text-black
        dark:text-zinc-300
        border-2
        font-semibold
        py-2
        px-4
        rounded-md
        dark:hover:text-black
        "
      >
        <NuxtLink

          to="/blogs"
        >
          Check my blog!
        </NuxtLink>
      </button>
    </section>
    <img
      class="
        absolute
        bottom-40
        opacity-50
        w-1/5
        invert
        dark:invert-0"
      src="/assets/images/pattern4.png"
      alt="swiggle"
    >
    <img
      class="
        absolute
        bottom-40
        opacity-50
        right-0
        w-1/5
        invert
        dark:invert-0
        "
      src="~/assets/images/pattern5.png"
      alt="pattern"
    >
    <a class="arrow-container" href="#about-me">
      <i class="arrow" />
    </a>
  </div>
</template>

<style scoped>
button{
    background: linear-gradient(to right, #fff 50%, #00000000 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease;
}
button:hover{
    background-position: left bottom;
}
</style>
