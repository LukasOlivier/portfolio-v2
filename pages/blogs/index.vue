<script lang="ts" setup>
import { PhArrowLeft, PhArrowRight } from "@phosphor-icons/vue";

const { data } = await useAsyncData("home", () =>
   queryContent("/blogs").sort({ _id: -1 }).find(),
);

const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchTest = ref("");

const formattedData = computed(() => {
   return (
      data.value?.map((articles) => {
         return {
            path: articles._path,
            title: articles.title || "no-title available",
            description: articles.description || "no-description available",
            image: articles.image || "/not-found.webp",
            alt: articles.alt || "no alter data available",
            date: articles.date || "not-date-available",
            published: articles.published || false,
         };
      }) || []
   );
});

const searchData = computed(() => {
   return (
      formattedData.value.filter((data) => {
         const lowerTitle = data.title.toLocaleLowerCase();
         if (lowerTitle.search(searchTest.value) !== -1) return true;
         else return false;
      }) || []
   );
});

const paginatedData = computed(() => {
   return (
      searchData.value.filter((data, idx) => {
         const startInd = (pageNumber.value - 1) * elementPerPage.value;
         const endInd = pageNumber.value * elementPerPage.value - 1;

         if (idx >= startInd && idx <= endInd) return true;
         else return false;
      }) || []
   );
});

function onPreviousPageClick() {
   if (pageNumber.value > 1) pageNumber.value -= 1;
}

const totalPage = computed(() => {
   const ttlContent = searchData.value.length || 0;
   const totalPage = Math.ceil(ttlContent / elementPerPage.value);
   return totalPage;
});

function onNextPageClick() {
   if (pageNumber.value < totalPage.value) pageNumber.value += 1;
}

useHead({
   title: "Blog",
   meta: [
      {
         name: "description",
         content:
            "Here you will find all the blog posts I have written & published on this site.",
      },
   ],
   titleTemplate: "Lukas Olivier - %s",
});
</script>

<template>
   <main class="mx-auto w-9/12 text-zinc-600">
      <ArchiveHero />

      <div v-motion-slide-visible-once-top>
         <input
            v-model="searchTest"
            placeholder="Search"
            type="text"
            class="block w-full rounded-md border-gray-300 bg-[#F1F2F4] text-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-800 dark:bg-slate-900 dark:placeholder-zinc-500"
         />
      </div>

      <div v-motion-slide-visible-once-top class="my-5 space-y-5">
         <template v-for="post in paginatedData" :key="post.title">
            <ArchiveCard
               v-if="post.published"
               :path="post.path"
               :title="post.title"
               :date="post.date"
               :description="post.description"
               :image="post.image"
               :alt="post.alt"
               :published="post.published"
            />
         </template>

         <ArchiveCard
            v-if="paginatedData.length <= 0"
            title="No Post Found"
            image="/not-found.webp"
         />
      </div>

      <div class="flex items-center justify-center space-x-6">
         <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
            <PhArrowLeft />
         </button>
         <p>{{ pageNumber }} / {{ totalPage }}</p>
         <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
            <PhArrowRight />
         </button>
      </div>
   </main>
</template>
