<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const showFullDescription = ref(false)

function toggleShowFullDescription() {
  showFullDescription.value = !showFullDescription.value
}
</script>

<template>
  <div class="card bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden">
    <img
      class="w-full h-56 object-cover object-center"
      :src="project.image"
      :alt="project.title"
    >
    <div class="p-6">
      <h2 class="text-black dark:text-zinc-300 text-xl font-semibold mb-2">
        {{ project.title }}
      </h2>
      <p
        class="text-gray-600 dark:text-zinc-400 text-base"
        :class="{
          'text-truncate': !showFullDescription,
        }"
      >
        {{ project.description }}
      </p>
      <p
        class="mt-5 text-indigo-500 dark:text-zinc-300 inline-flex items-center cursor-pointer hover:underline"
        @click.prevent="toggleShowFullDescription"
      >
        Learn More
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s;
}

.card:nth-child(2n+1):hover {
  transform: scale(1.05) rotate(2deg) ;
}

.card:nth-child(2n):hover {
  transform: scale(1.05) rotate(-2deg) ;
}

/* Truncate text */
.text-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
