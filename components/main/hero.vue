<script setup>
import { onMounted, ref } from "vue";
import Typewriter from "typewriter-effect/dist/core";

const typeWriterElement = ref(null);

onMounted(() => {
   document.querySelector(".typeWriter").innerText = "";
   const typewriter = new Typewriter(typeWriterElement.value, {
      loop: true,
      delay: 25,
   });

   typewriter
      .typeString("Student applied computer science")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Musician")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Head leader of youth movement 'KSA Izegem'")
      .pauseFor(1000)
      .deleteAll()
      .start();
});
</script>

<template>
   <div class="flex h-screen flex-col">
      <section id="home" class="mx-auto mt-52 sm:w-9/12 xl:w-1/3">
         <h1
            class="text-6xl font-semibold leading-tight text-black dark:text-white md:text-7xl"
         >
            Lukas Olivier
         </h1>

         <p
            ref="typeWriterElement"
            class="typeWriter mb-10 text-black dark:text-white"
         >
            Student applied computer science
         </p>

         <NuxtLink
            class="rounded-md border-2 px-4 py-2 font-semibold text-black dark:text-zinc-300 dark:hover:text-black"
            to="/blogs"
         >
            Check my blog!
         </NuxtLink>
      </section>
      <NuxtImg
         v-motion-pop-visible-once
         :placeholder="[50, 25, 75, 5]"
         format="webp"
         class="absolute bottom-40 w-1/5 opacity-50 invert dark:invert-0 sm:hidden xl:block"
         src="/patterns/pattern4.webp"
         alt="swiggle"
      />
      <NuxtImg
         v-motion-pop-visible-once
         :placeholder="[50, 25, 75, 5]"
         format="webp"
         class="absolute bottom-40 right-0 w-1/5 opacity-50 invert dark:invert-0 sm:hidden md:block"
         src="/patterns/pattern5.webp"
         alt="pattern"
      />
      <NuxtLink
         aria-label="Scroll down to about me"
         class="absolute bottom-10 flex w-full justify-center text-black dark:text-white"
         href="#about-me"
      >
         <i
            id="down-arrow"
            class="fa fa-chevron-down text-4xl"
            aria-hidden="true"
         />
      </NuxtLink>
   </div>
</template>

<style scoped>
button {
   background: linear-gradient(to right, #fff 50%, #00000000 50%);
   background-size: 200% 100%;
   background-position: right bottom;
   transition: all 0.5s ease;
}
button:hover {
   background-position: left bottom;
}
#down-arrow {
   animation: bounce 2s infinite;
}
@keyframes bounce {
   0%,
   20%,
   50%,
   80%,
   100% {
      transform: translateY(0);
   }
   40% {
      transform: translateY(-15px);
   }
   60% {
      transform: translateY(-5px);
   }
}
</style>
