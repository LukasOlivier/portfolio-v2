<template>
  <article
    class="group m-2 overflow-hidden rounded-2xl border text-zinc-700 shadow-lg dark:border-gray-800"
  >
    <NuxtLink to="/">
      <div
        class="w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.05] md:h-36 lg:h-48"
      >
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2
          class="pb-1 text-3xl font-semibold text-black group-hover:text-sky-700 dark:text-zinc-300 dark:group-hover:text-sky-400"
        >
          No Post Available
        </h2>

        <div
          class="flex items-center pt-2 text-sky-700 group-hover:underline dark:text-sky-400"
        >
          <p>Back To Home</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
