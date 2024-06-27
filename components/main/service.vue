<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  imageLeft: Boolean,
});
</script>

<template>
  <div
    v-motion-slide-visible-once-left
    class="flex justify-between items-center gap-20 sm:flex-col"
    :class="imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <div class="self-start flex-grow sm:w-full md:w-1/2">
      <h4 class="text-3xl font-bold text-gray-800 mb-5">{{ title }}</h4>
      <p class="text-gray-600 mb-5 text-xl md:w-3/4 sm:w-full">
        {{ description }}
      </p>
    </div>
    <img class="sm:w-3/4 md:w-1/4" :src="image" :alt="title + ' image'" />
  </div>
</template>
