<script setup lang="ts">
interface Props {
   title: string;
   image: string;
   alt: string;
   description: string;
   date: string;
}

withDefaults(defineProps<Props>(), {
   title: "no-title",
   image: "#",
   alt: "no-img",
   description: "no description",
   date: "no-date",
});
</script>

<template>
   <header class="mb-10 flex flex-col items-center">
      <h1
         class="m-7 text-center text-xl font-bold dark:text-zinc-300 md:text-3xl lg:text-4xl"
      >
         {{ title || "" }}
      </h1>
      <NuxtImg
         :src="image || ''"
         :alt="alt || ''"
         class="m-auto h-32 w-4/6 content-center rounded-2xl object-cover shadow-lg md:h-72 md:w-4/5"
      />
      <p
         class="mx-auto my-3 max-w-xl text-center text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm"
      >
         {{ description }}
      </p>
      <div class="my-8 flex w-full justify-center text-xs md:text-base">
         <div
            class="content-center gap-8 text-xs text-black dark:text-zinc-300 sm:text-sm md:flex"
         >
            <div class="flex items-center font-semibold">
               <LogoDate />
               <p>{{ date || "" }}</p>
            </div>
         </div>
      </div>
      <NuxtLink to="/blogs" class="self-start text-center text-xl">
         <i class="fa fa-arrow-left mr-1" />
         Go Back
      </NuxtLink>
   </header>
</template>
