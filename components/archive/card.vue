<script lang="ts" setup>
	interface Props {
		path?: string;
		title?: string;
		date?: string;
		description?: string;
		image?: string;
		alt?: string;
		published?: boolean;
	}

	withDefaults(defineProps<Props>(), {
		path: '/',
		title: 'no-title',
		date: 'no-date',
		description: 'no-description',
		image: '/blog-img/blog.webp',
		alt: 'no-alt',
		published: false,
	});
</script>

<template>
	<article
		class="group overflow-hidden rounded-2xl border text-zinc-700 shadow-sm dark:border-gray-800 dark:text-zinc-300"
	>
		<NuxtLink :to="path" class="grid grid-cols-1 gap-1 sm:grid-cols-10">
			<div class="hidden sm:col-span-3 md:block">
				<NuxtImg
					class="h-full w-full rounded-t-2xl object-cover object-center shadow-lg transition-all duration-500 group-hover:scale-[1.02] sm:rounded-l-2xl sm:rounded-t-none lg:block"
					:src="image"
					:alt="alt"
					:title="title"
				/>
			</div>
			<div class="p-5 sm:col-span-7">
				<h2
					class="pb-1 text-xl font-semibold text-black group-hover:text-sky-700 dark:text-zinc-300 dark:group-hover:text-sky-400"
				>
					{{ title }}
				</h2>
				<p class="line-clamp-2 text-ellipsis">
					{{ description }}
				</p>
				<div
					class="mb-1 mt-2 text-sm text-black dark:text-zinc-300 md:flex md:space-x-6"
				>
					<div class="flex items-center">
						<LogoDate />
						<p>{{ date }}</p>
					</div>
				</div>
				<div
					class="flex items-center pt-2 text-sky-700 group-hover:underline dark:text-sky-400"
				>
					<p>Read More</p>
					<LogoArrow />
				</div>
			</div>
		</NuxtLink>
	</article>
</template>
