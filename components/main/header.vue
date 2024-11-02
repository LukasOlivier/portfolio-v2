<script setup lang="ts">
import { PhSun, PhMoon } from "@phosphor-icons/vue";
const colorMode = useColorMode();
function onClick(val: string) {
   colorMode.preference = val;
}
</script>

<template>
   <div
      class="border-b bg-white py-5 font-semibold dark:border-gray-800 dark:bg-black"
   >
      <div
         class="mx-auto flex w-9/12 items-baseline sm:justify-center md:justify-between"
      >
         <ul class="flex items-baseline space-x-5 sm:hidden md:block">
            <li class="text-base font-bold sm:text-xl">
               <NuxtLink to="/"> Lukas Olivier </NuxtLink>
            </li>
         </ul>
         <ul
            class="flex items-center space-x-3 text-sm sm:space-x-4 sm:text-lg"
         >
            <li>
               <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/#services"> Services </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/blogs"> Blog </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/projects"> Projects </NuxtLink>
            </li>
            <li>
               <ClientOnly>
                  <button
                     name="color-mode-toggle"
                     :title="colorMode.value === 'light' ? 'Light' : 'Dark'"
                     class="flex items-center transition-all ease-out hover:scale-105 hover:cursor-pointer"
                     @click="
                        onClick(colorMode.value === 'light' ? 'dark' : 'light')
                     "
                  >
                     <PhSun
                        v-if="colorMode.value === 'light'"
                        :size="24"
                        weight="fill"
                     />
                     <PhMoon v-else :size="24" weight="fill" />
                  </button>
               </ClientOnly>
            </li>
         </ul>
      </div>
   </div>
</template>
