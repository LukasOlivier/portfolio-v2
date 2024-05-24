<template>
  <header class="mb-10">
    <h1 class="text-xl dark:text-zinc-300 md:text-3xl  lg:text-4xl m-7 font-bold text-center">
      {{ title || '' }}
    </h1>
    <NuxtImg
      :src="image || ''"
      :alt="alt || ''"
      class="m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
    />
    <p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center font-semibold">
          <LogoDate />
          <p>{{ date || '' }}</p>
        </div>
      </div>
    </div>
    <NuxtLink to="/blogs" class="text-center text-xl">
      <i
        class="fa-solid fa-arrow-left mr-1"
      />
      Go Back
    </NuxtLink>
  </header>
</template>
