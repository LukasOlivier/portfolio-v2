<script lang="ts" setup>
interface Props {
   path: string;
   title: string;
   date: string;
   description: string;
   image: string;
   alt: string;
   published: boolean;
}

withDefaults(defineProps<Props>(), {
   path: "/",
   title: "no-title",
   date: "no-date",
   description: "no-description",
   image: "/blogs-img/blog.webp",
   alt: "no-alt",
   published: false,
});
</script>

<template>
   <article
      class="group m-2 overflow-hidden rounded-2xl border text-zinc-700 shadow-sm dark:border-gray-800 dark:text-zinc-300"
   >
      <NuxtLink :to="path">
         <NuxtImg
            class="w-full rounded-t-2xl object-cover object-center shadow-lg transition-all duration-500 group-hover:scale-[1.02] md:h-36 lg:h-48"
            :src="image"
            :alt="alt"
         />
         <div class="pb-4">
            <div class="pb-2 pt-3 text-black dark:text-zinc-300">
               <div class="flex items-center">
                  <LogoDate />
                  {{ date }}
               </div>
            </div>
            <h2
               class="pb-1 text-xl font-semibold text-black group-hover:text-sky-700 dark:text-zinc-300 dark:group-hover:text-sky-400"
            >
               {{ title }}
            </h2>
            <p class="line-clamp-2 text-ellipsis text-base">
               {{ description }}
            </p>
            <div
               class="flex items-center py-2 text-sky-700 group-hover:underline dark:text-sky-400"
            >
               <p>Read More</p>
               <LogoArrow />
            </div>
         </div>
      </NuxtLink>
   </article>
</template>
