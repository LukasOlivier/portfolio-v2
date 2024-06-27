<script setup>
defineProps({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   imageLeft: {
      type: Boolean,
      required: true,
   },
});
</script>

<template>
   <div
      v-motion-slide-visible-once-left
      class="flex items-center justify-between gap-20 sm:flex-col"
      :class="imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'"
   >
      <div class="flex-grow self-start sm:w-full md:w-1/2">
         <h4 class="mb-5 text-3xl font-bold text-black dark:text-white">
            {{ title }}
         </h4>
         <p class="mb-5 text-xl text-black dark:text-white sm:w-full md:w-3/4">
            {{ description }}
         </p>
      </div>
      <NuxtImg class="sm:w-3/4 md:w-1/4" :src="image" :alt="title + ' image'" />
   </div>
</template>
