<script setup>
	defineProps({
		project: {
			type: Object,
			required: true,
		},
	});

	const showFullDescription = ref(false);

	function toggleShowFullDescription() {
		showFullDescription.value = !showFullDescription.value;
	}
</script>

<template>
	<div
		class="card overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-700"
	>
		<NuxtImg
			class="h-56 w-full object-cover object-center"
			format="webp"
			:src="project.image"
			:alt="project.title"
			quality="50"
			preload
			width="500"
			height="300"
			title="project image"
		/>

		<div class="p-6">
			<div class="flex items-center justify-between">
				<h2 class="mb-2 text-xl font-semibold text-black dark:text-zinc-300">
					{{ project.title }}
				</h2>
				<nav class="flex gap-3">
					<a
						v-if="project.github"
						:href="project.github"
						target="_blank"
						aria-label="visit github repository"
					>
						<Icon
							name="mdi:github"
							size="20"
							class="hover:text-sky-700 dark:hover:text-sky-400"
						/>
					</a>
					<a
						v-if="project.website"
						:href="project.website"
						target="_blank"
						aria-label="visit external link"
					>
						<Icon
							name="mdi:link-variant"
							size="20"
							class="hover:text-sky-700 dark:hover:text-sky-400"
						/>
					</a>
					<a
						v-if="project.linkedin"
						:href="project.linkedin"
						target="_blank"
						aria-label="visit linkedin post"
					>
						<Icon
							name="mdi:linkedin"
							size="20"
							class="hover:text-sky-700 dark:hover:text-sky-400"
						/>
					</a>
				</nav>
			</div>

			<p
				class="text-base text-gray-600 dark:text-zinc-400"
				:class="{
					'text-truncate': !showFullDescription,
				}"
				@click.prevent="toggleShowFullDescription"
			>
				{{ project.description }}
			</p>
			<p
				class="mt-5 inline-flex cursor-pointer items-center text-indigo-500 hover:underline dark:text-zinc-300"
				@click.prevent="toggleShowFullDescription"
			>
				{{ showFullDescription ? 'Show less' : 'Show more' }}
			</p>
		</div>
		<ul class="mb-6 ml-6 flex items-center gap-3">
			<li
				v-for="tag in project.tags"
				:key="tag"
				class="text-gray-600 dark:text-zinc-400"
			>
				<Icon :name="tag" class="text-xl" />
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.card {
		transition: transform 0.3s;
	}

	@media (min-width: 768px) {
		.card:nth-child(2n + 1):hover {
			transform: scale(1.05) rotate(2deg);
			cursor: pointer;
		}

		.card:nth-child(2n):hover {
			transform: scale(1.05) rotate(-2deg);
			cursor: pointer;
		}
	}

	/* Truncate text */
	.text-truncate {
		display: -webkit-box;
		-webkit-line-clamp: 3; /* Number of lines to show */
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
