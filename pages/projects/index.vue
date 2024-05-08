<script setup>
import { ref } from 'vue'

const categories = ref([
  'All projects',
  'Personal',
  'School',
  'Work',
])

const pickedCategory = ref(categories.value[0])

const projects = ref([
  {
    id: 1,
    title: 'Eventiz',
    description: 'Eventiz is a huge school project redefining event management. The primary goal of this project was to create a safer and more efficient way of managing events. We developed a wide variety of application with different languages and frameworks to achieve this goal.',
    image: '/projects-img/eventiz.png',
    category: 'School',
  },
  {
    id: 2,
    title: 'Personal blog 1.0',
    description: 'I started this blog to share my experiences and knowledge with the world. I write about my projects, my experiences and anything else I find interesting. It\'s a Next.js project bootstrapped with create-next-app. I used Tailwindcss to style the website.',
    image: '/projects-img/blog1.png',
    category: 'Personal',
  },
  {
    id: 3,
    title: 'BrandY game',
    description: 'BrandY is a long term project which I got the opportunity to work on during my last year of my bachelor\'s degree in software engineering at Howest Brugge. We got the chance to make a 2.0 version of the game, based on feature request from the BrandY team. The game is made using SvelteKit and the backend is made using Laravel. This project taught me a lot about working in a team and how a real life project works.',
    image: '/projects-img/brandy.jpg',
    category: 'School',
  },

])

function getProjects() {
  return projects.value.filter((project) => {
    if (pickedCategory.value === 'All projects')
      return true
    return project.category === pickedCategory.value
  })
}
</script>

<template>
  <div class="w-9/12 mx-auto mb-5 mt-20">
    <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">
      Thanks for visiting my projects!
    </h1>
    <p class="dark:text-zinc-300 mb-10">
      Here you will find all the projects I have worked on during my career.
    </p>
    <section class="flex flex-col">
      <div class="w-1/4">
        <h2 class="text-black dark:text-zinc-300 font-semibold leading-tight text-2xl md:text-3xl my-5">
          Categories
        </h2>
        <ul class="flex flex-wrap justify-between mb-5">
          <li
            v-for="category in categories"
            :key="category"
            class="cursor-pointer"
            :class="{
              'underline font-semibold': pickedCategory === category,
            }"
            @click="pickedCategory = category"
          >
            {{ category }}
          </li>
        </ul>
      </div>
      <ul class="grid grid-cols-4 gap-5">
        <project-item v-for="project in getProjects()" :key="project.id" :project="project" @click="showFullDescription(project)" />
      </ul>
    </section>
  </div>
</template>
