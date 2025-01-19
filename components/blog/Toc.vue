<script setup lang="ts">
	const slug = useRoute().params.slug;

	const articles = await queryCollection('blog').path(`/blog/${slug}`).first();

	const links = articles?.body?.toc?.links || [];
</script>

<template>
	<div
		class="sticky top-28 hidden h-96 justify-self-end lg:col-span-3 lg:block"
	>
		<div
			class="min-w-[200px] rounded-md border p-3 dark:border-gray-800 dark:bg-slate-900"
		>
			<h1 class="mb-3 border-b pb-2 text-sm font-bold dark:border-gray-800">
				Table Of Content
			</h1>
			<NuxtLink
				v-for="link in links"
				:key="link.id"
				:to="`#${link.id}`"
				class="mb-3 block text-xs hover:underline"
			>
				{{ link.text }}
			</NuxtLink>
		</div>
	</div>
</template>
