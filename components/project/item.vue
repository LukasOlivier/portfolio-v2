<script setup lang="ts">
import { ref } from 'vue'

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
  <div
    class="card bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden"
  >
    <img
      class="w-full h-56 object-cover object-center"
      :src="project.image"
      :alt="project.title"
    >

    <div class="p-6">
      <div class="flex items-center justify-between">
        <h2 class="text-black dark:text-zinc-300 text-xl font-semibold mb-2">
          {{ project.title }}
        </h2>
        <nav class="flex gap-3">
          <a
            v-if="project.github"
            :href="project.github" class="text-indigo-500 dark:text-zinc-300"
            target="_blank"
          >
            <i class="fab fa-github " />
          </a>
          <a v-if="project.website" :href="project.website" class="text-indigo-500 dark:text-zinc-300" target="_blank">
            <i class="fas fa-external-link-alt " />

          </a>
          <a v-if="project.linkedin" :href="project.linkedin" class="text-indigo-500 dark:text-zinc-300" target="_blank">
            <i class="fab fa-linkedin " />
          </a>
        </nav>
      </div>

      <p
        class="text-gray-600 dark:text-zinc-400 text-base"
        :class="{
          'text-truncate': !showFullDescription,
        }"
        @click.prevent="toggleShowFullDescription"
      >
        {{ project.description }}
      </p>
      <p
        class="mt-5 text-indigo-500 dark:text-zinc-300 inline-flex items-center cursor-pointer hover:underline"
        @click.prevent="toggleShowFullDescription"
      >
        {{ showFullDescription ? 'Show less' : 'Show more' }}
      </p>
    </div>
    <ul class="flex items-center ml-6 mb-6 gap-3">
      <li
        v-for="tag in project.tags"
        :key="tag"
        class="text-gray-600 dark:text-zinc-400 "
      >
        <i :class="`devicon-${tag.toLowerCase()} text-lg`" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s;
}

.card:nth-child(2n+1):hover {
  transform: scale(1.05) rotate(2deg) ;
  cursor: pointer;
}

.card:nth-child(2n):hover {
  transform: scale(1.05) rotate(-2deg) ;
  cursor: pointer;
}

/* Truncate text */
.text-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
