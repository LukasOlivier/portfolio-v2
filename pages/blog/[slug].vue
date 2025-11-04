<script setup>
  const router = useRouter();
  const slug = useRoute().params.slug;

  const { data: post } = await useAsyncData(`${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first();
  });

  // Redirect to 404 if post doesn't exist
  if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' });
  }

  // Track if we're handling internal anchor navigation
  let isInternalNavigation = false;

  function handleBrowserBack(event) {
    // Only handle back navigation if it's not an internal anchor change
    if (!isInternalNavigation) {
      // Prevent default navigation
      event.preventDefault();
      router.push('/blog');
    }
    // Reset the flag
    isInternalNavigation = false;
  }

  function handleAnchorClick(e) {
    if (e.target.tagName === 'A' && e.target.hash) {
      isInternalNavigation = true;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('popstate', handleBrowserBack);
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', handleBrowserBack);
    document.removeEventListener('click', handleAnchorClick);
  });

  useHead({
    title: post.value?.title || 'Blog Post',
    meta: [
      { name: 'description', content: post.value?.description || '' },
      {
        name: 'description',
        content: post.value?.description || '',
      },
      {
        property: 'og:title',
        content: post.value?.title || '',
      },
      {
        property: 'og:description',
        content: post.value?.description || '',
      },
      {
        property: 'og:image',
        content: 'https://www.lukasolivier.be/' + (post.value?.image || ''),
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.value?.title || '' },
      { name: 'twitter:description', content: post.value?.description || '' },
      {
        name: 'twitter:image',
        content: 'https://www.lukasolivier.be/' + (post.value?.image || ''),
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://www.lukasolivier.be/blog/' + slug },
    ],
  });
</script>

<template>
  <div class="mx-auto grid w-11/12 grid-cols-12 gap-4 lg:w-8/12 lg:gap-8">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="post?.title"
        :image="post?.image"
        :alt="post?.alt"
        :date="post?.date"
        :description="post?.description"
      />
      <div class="prose mx-auto max-w-5xl dark:prose-invert prose-a:underline">
        <ContentRenderer v-if="post" :value="post">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc :post="post" />
  </div>
</template>
