<script setup>
	// Constants
	const POSTS_PER_PAGE = 5;
	const DEFAULT_IMAGE = '/not-found.webp';

	// Composables
	const searchQuery = ref('');
	const currentPage = ref(1);

	// Fetch posts
	const { data: allPosts, error } = await useAsyncData('posts', () =>
		queryCollection('blog').order('id', 'DESC').all()
	);

	if (error.value) {
		console.error('Error fetching posts:', error.value);
	}

	// Format posts with default values
	const formattedPosts = computed(() => {
		if (!allPosts.value) return [];

		return allPosts.value.map((post) => ({
			path: post.path || '/404',
			title: post.title || 'Untitled Post',
			description: post.description || 'No description available',
			image: post.image || DEFAULT_IMAGE,
			alt: post.alt || 'Post thumbnail',
			date: post.date || 'Date unavailable',
			published: post.published || false,
		}));
	});

	// Filter posts by search query
	const filteredPosts = computed(() => {
		if (!searchQuery.value) return formattedPosts.value;

		const query = searchQuery.value.toLowerCase();
		return formattedPosts.value.filter((post) =>
			post.title.toLowerCase().includes(query)
		);
	});

	// Calculate pagination
	const totalPages = computed(() =>
		Math.ceil(filteredPosts.value.length / POSTS_PER_PAGE)
	);

	// Get paginated posts
	const paginatedPosts = computed(() => {
		const startIndex = (currentPage.value - 1) * POSTS_PER_PAGE;
		const endIndex = startIndex + POSTS_PER_PAGE;
		return filteredPosts.value.slice(startIndex, endIndex);
	});

	// Navigation methods
	const navigation = {
		previousPage: () => {
			if (currentPage.value > 1) currentPage.value--;
		},
		nextPage: () => {
			if (currentPage.value < totalPages.value) currentPage.value++;
		},
	};

	// Reset page when search changes
	watch(searchQuery, () => {
		currentPage.value = 1; // Reset to first page when search changes
	});

	// SEO
	useHead({
		title: 'Blog',
		meta: [
			{
				name: 'description',
				content:
					'Here you will find all the blog posts I have written & published on this site. Topics include software development, technology insights, and Izybit company updates.',
			},
		],
		link: [{ rel: 'canonical', href: 'https://www.lukasolivier.be/blog' }],
	});
</script>

<template>
	<main class="mx-auto w-9/12 text-zinc-600">
		<ArchiveHero />

		<!-- Search Input -->
		<div>
			<input
				v-model="searchQuery"
				type="text"
				placeholder="Search posts..."
				class="block w-full rounded-md border-gray-300 bg-[#F1F2F4] px-2 py-3 text-zinc-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-800 dark:bg-slate-900 dark:text-white dark:placeholder-zinc-500"
			/>
		</div>

		<!-- Posts Grid -->
		<div class="my-5 space-y-5">
			<template v-for="post in paginatedPosts" :key="post.title">
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
				v-if="filteredPosts.value && filteredPosts.value.length === 0"
				title="No Post Found"
				:image="DEFAULT_IMAGE"
			/>
		</div>

		<!-- Pagination -->
		<div
			v-if="filteredPosts.value && filteredPosts.value.length > POSTS_PER_PAGE"
			class="flex items-center justify-center space-x-6"
		>
			<button
				:disabled="currentPage <= 1"
				class="disabled:opacity-50"
				@click="navigation.previousPage"
			>
				<Icon name="mdi:arrow-left" size="24" />
			</button>
			<p>{{ currentPage }} / {{ totalPages }}</p>
			<button
				:disabled="currentPage >= totalPages"
				class="disabled:opacity-50"
				@click="navigation.nextPage"
			>
				<Icon name="mdi:arrow-right" size="24" />
			</button>
		</div>
	</main>
</template>
