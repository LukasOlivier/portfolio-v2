<script setup>
  const experiences = [
    {
      id: 2,
      company: 'Yapla',
      role: 'Software Developer',
      period: 'June 2025 - Present',
      url: 'https://www.yapla.be/#about',
      current: true,
    },
    {
      id: 1,
      company: 'Izybit',
      role: 'Self-Employed Freelance Developer',
      period: 'June 2024 - June 2025',
      url: '#',
      current: false,
    },
  ];
</script>

<template>
  <section id="experience">
    <h2 class="text-3xl font-semibold leading-tight mb-6"> Work Experience </h2>

    <div class="space-y-8">
      <div
        v-for="(exp, index) in experiences"
        :key="exp.id"
        class="relative pl-8"
      >
        <!-- Timeline line -->
        <div
          v-if="index !== experiences.length - 1"
          class="absolute left-2 top-12 h-24 w-0.5 bg-gradient-to-b from-blue-500 to-transparent dark:from-blue-400"
        />

        <!-- Timeline dot -->
        <div
          class="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900"
          :class="{ 'bg-blue-500': exp.current }"
        />

        <!-- Content card -->
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-slate-800"
        >
          <div class="flex flex-col justify-between md:flex-row md:items-start">
            <div class="mb-4 flex-1 md:mb-0">
              <div
                v-if="exp.url && exp.url !== '#'"
                class="space-x-3 flex items-center"
              >
                <a
                  :href="exp.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl font-bold hover:underline text-black dark:text-white"
                >
                  {{ exp.company }}
                </a>

                <p
                  v-if="exp.current"
                  class="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                >
                  Current
                </p>
              </div>
              <h3 v-else class="text-2xl font-bold text-black dark:text-white">
                {{ exp.company }}
              </h3>
              <p
                class="mt-1 text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                {{ exp.role }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ exp.period }}
              </p>
            </div>
          </div>

          <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            {{ exp.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #experience {
    scroll-margin-top: 5rem;
  }
</style>
