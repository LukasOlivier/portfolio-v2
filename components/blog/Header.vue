<script setup lang="ts">
	interface Props {
		title?: string;
		image?: string;
		alt?: string;
		description?: string;
		date?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		title: 'no-title',
		image: '#',
		alt: 'no-img',
		description: 'no description',
		date: 'no-date',
	});
</script>

<template>
	<header class="mb-10 flex flex-col items-center">
		<h1
			class="m-7 text-center text-xl font-bold dark:text-zinc-300 md:text-3xl lg:text-4xl"
		>
			{{ props.title || '' }}
		</h1>
		<NuxtImg
			:src="props.image || ''"
			:alt="props.alt || ''"
			:title="props.title || ''"
			class="m-auto h-32 w-4/6 content-center rounded-2xl object-cover shadow-lg md:h-72 md:w-4/5"
		/>
		<p
			class="mx-auto my-3 max-w-xl text-center text-sm text-zinc-600 dark:text-zinc-400"
		>
			{{ props.description }}
		</p>
		<div class="my-8 flex w-full justify-center text-xs md:text-base">
			<div
				class="content-center gap-8 text-sm text-black dark:text-zinc-300 md:flex"
			>
				<div class="flex items-center font-semibold">
					<Icon name="mdi:calendar" size="20" class="mr-2" />

					<p>{{ props.date || '' }}</p>
				</div>
			</div>
		</div>
		<NuxtLink
			to="/blog"
			class="flex items-center gap-2 self-start text-center text-xl"
		>
			<Icon name="mdi:chevron-left" size="24" />
			<p class="text-base">Go Back</p>
		</NuxtLink>
	</header>
</template>
