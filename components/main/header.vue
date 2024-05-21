<script setup lang="ts">
const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800  font-semibold ">
    <div class="flex w-9/12 md:justify-between mx-auto items-baseline sm:justify-center ">
      <ul class="flex items-baseline sm:hidden md:block space-x-5">
        <li class="text-base sm:text-xl font-bold ">
          <NuxtLink to="/">
            Lukas Olivier
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">
            Projects
          </NuxtLink>
        </li>
        <li>
          <ClientOnly>
            <button
              name="color-mode-toggle"
              :title="colorMode.value === 'light' ? 'Light' : 'Dark'"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer fa" :class="[colorMode.value === 'light' ? 'fa-sun' : 'fa-moon']"
              @click="onClick(colorMode.value === 'light' ? 'dark' : 'light')"
            />
          </ClientOnly>
        </li>
      </ul>
    </div>
  </div>
</template>
