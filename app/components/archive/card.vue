<script setup>
  defineProps({
    path: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: 'no-title',
    },
    date: {
      type: String,
      default: 'no-date',
    },
    description: {
      type: String,
      default: 'no-description',
    },
    image: {
      type: String,
      default: 'no-image',
    },
    alt: {
      type: String,
      default: 'no-alt',
    },
    published: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border text-zinc-700 shadow-sm dark:border-gray-800 dark:text-zinc-300"
  >
    <NuxtLink :to="path" class="flex flex-col md:flex-row">
      <div class="overflow-hidden md:w-1/3">
        <NuxtImg
          class="h-60 w-full object-cover object-center shadow-lg transition-all duration-500 group-hover:scale-[1.02] md:h-full md:rounded-l-2xl md:rounded-tr-none"
          :src="image"
          :alt="alt"
          :title="title"
        />
      </div>
      <div class="p-5 md:w-2/3">
        <h2
          class="pb-1 text-xl font-semibold text-black group-hover:text-sky-700 dark:text-zinc-300 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="line-clamp-2 text-ellipsis">
          {{ description }}
        </p>
        <div
          class="mb-1 mt-2 text-sm text-black dark:text-zinc-300 md:flex md:space-x-6"
        >
          <div class="flex items-center">
            <LogoDate />
            <p>{{ date }}</p>
          </div>
        </div>
        <div
          class="flex items-center pt-2 text-sky-700 group-hover:underline dark:text-sky-400"
        >
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
