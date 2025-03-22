<script setup>
	const colorMode = useColorMode();

	function onClick(val) {
		colorMode.preference = val;
	}
</script>

<template>
	<div
		class="border-b bg-white py-5 font-semibold dark:border-gray-800 dark:bg-black"
	>
		<div
			class="mx-auto flex w-9/12 items-center justify-center md:justify-between"
		>
			<ul class="hidden items-baseline md:flex">
				<li class="flex items-center gap-5 text-center text-2xl font-bold">
					<LogoHeader></LogoHeader>
					<NuxtLink class="whitespace-nowrap" to="/">Lukas Olivier</NuxtLink>
				</li>
			</ul>
			<ul
				class="flex w-full items-center justify-between space-x-3 text-lg md:justify-end md:space-x-4"
			>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/blog">Blog</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/projects">Projects</NuxtLink>
				</li>
				<li>
					<ClientOnly>
						<button
							name="color-mode-toggle"
							:title="colorMode.value === 'light' ? 'Light' : 'Dark'"
							class="flex items-center transition-all ease-out hover:scale-105 hover:cursor-pointer"
							@click="onClick(colorMode.value === 'light' ? 'dark' : 'light')"
						>
							<Icon
								v-if="colorMode.value === 'light'"
								name="mdi:moon-waning-crescent"
								size="24"
							/>
							<Icon v-else name="mdi:white-balance-sunny" size="24" />
						</button>
					</ClientOnly>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	a {
		position: relative;
		display: inline-block;
	}

	a::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: currentColor; /* Matches the text color */
		visibility: hidden;
		transition: all 0.2s ease-in-out;
	}

	a:hover::before {
		visibility: visible;
		width: 100%;
	}
</style>
