<script setup lang="ts">
import { useRoute } from "vue-router";
import type { BlogPost } from "@/types/blog";

const { path } = useRoute();

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () =>
   queryContent(path).findOne(),
);

const router = useRouter();
function handleBrowserBack() {
   router.push("/blogs");
}

onMounted(() => {
   window.addEventListener("popstate", handleBrowserBack);
});

onUnmounted(() => {
   window.removeEventListener("popstate", handleBrowserBack);
});

if (error.value) navigateTo("/404");

const data = computed<BlogPost>(() => {
   return {
      title: articles.value?.title || "no-title available",
      description: articles.value?.description || "no-description available",
      image: articles.value?.image || "/not-found.webp",
      alt: articles.value?.alt || "no alter data available",
      date: articles.value?.date || "not-date-available",
      published: articles.value?.published || false,
   };
});

useHead({
   title: data.value.title || "",
   meta: [
      { name: "description", content: data.value.description },
      {
         name: "description",
         content: data.value.description,
      },
      {
         property: "og:title",
         content: data.value.title,
      },
      {
         property: "og:description",
         content: data.value.description,
      },
      {
         property: "og:image",
         content: data.value.image,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: data.value.title },
      { name: "twitter:description", content: data.value.description },
      { name: "twitter:image", content: data.value.image },
   ],
});
</script>

<template>
   <div class="mx-auto grid grid-cols-12 gap-4 sm:w-11/12 lg:w-6/12 lg:gap-8">
      <div class="col-span-12 lg:col-span-9">
         <BlogHeader
            :title="data.title"
            :image="data.image"
            :alt="data.alt"
            :date="data.date"
            :description="data.description"
         />
         <div
            class="prose prose-sm prose-zinc mx-auto max-w-5xl dark:prose-invert sm:prose-base md:prose-lg prose-h1:no-underline prose-pre:max-w-xs prose-img:rounded-lg sm:prose-pre:max-w-full"
         >
            <ContentRenderer v-if="articles" :value="articles">
               <template #empty>
                  <p>No content found.</p>
               </template>
            </ContentRenderer>
         </div>
      </div>
      <BlogToc />
   </div>
</template>
