<script setup>
	const router = useRouter();
	const slug = useRoute().params.slug;

	const { data: post } = await useAsyncData(`${slug}`, () => {
		return queryCollection('blog').path(`/blog/${slug}`).first();
	});

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

	console.log(post);
	useHead({
		title: post.value.title || '',
		meta: [
			{ name: 'description', content: post.value.description },
			{
				name: 'description',
				content: post.value.description,
			},
			{
				property: 'og:title',
				content: post.value.title,
			},
			{
				property: 'og:description',
				content: post.value.description,
			},
			{
				property: 'og:image',
				content: 'https://www.lukasolivier.be/' + post.value.image,
			},
			{ rel: 'canonical', href: 'https://www.lukasolivier.be' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: post.value.title },
			{ name: 'twitter:description', content: post.value.description },
			{
				name: 'twitter:image',
				content: 'https://www.lukasolivier.be/' + post.value.image,
			},
		],
	});
</script>

<template>
	<div class="mx-auto grid grid-cols-12 gap-4 sm:w-11/12 lg:w-8/12 lg:gap-8">
		<div class="col-span-12 lg:col-span-9">
			<BlogHeader
				:title="post.title"
				:image="post.image"
				:alt="post.alt"
				:date="post.date"
				:description="post.description"
			/>
			<div
				class="prose prose-sm prose-zinc mx-auto max-w-5xl dark:prose-invert sm:prose-base md:prose-lg prose-h1:no-underline prose-img:rounded-lg"
			>
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
