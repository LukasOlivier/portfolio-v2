<script setup>
	const techStack = [
		{ name: 'Nuxt 3', url: 'https://nuxt.com/' },
		{ name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
	];

	const tools = [
		{
			name: 'Visual Studio Code',
			url: 'https://code.visualstudio.com/',
			ariaLabel: 'Visit Visual Studio Code website',
		},
	];

	const deployment = [
		{
			name: 'Vercel',
			url: 'https://vercel.com/',
			ariaLabel: 'Visit Vercel website',
		},
	];

	const socialLinks = [
		{
			name: 'LukasOlivier',
			url: 'https://www.linkedin.com/in/lukas-olivier-a19862231/',
			icon: 'mdi:linkedin',
			ariaLabel: 'linkedin',
		},
		{
			name: 'LukasOlivier',
			url: 'https://github.com/LukasOlivier',
			icon: 'mdi:github',
			ariaLabel: 'github',
		},
		{
			name: 'mail@lukasolivier.be',
			url: 'mailto:mail@lukasolivier.be',
			icon: 'mdi:email',
			ariaLabel: 'mail',
			iconProps: { size: 22, weight: 'bold' },
		},
		{
			name: 'BE1010398025',
			icon: 'mdi:bank',
			iconProps: { size: 22, weight: 'bold' },
		},
	];
</script>

<template>
	<footer id="contact" class="mt-20 bg-black/5 py-10 dark:bg-black/30">
		<div
			class="mx-auto flex w-11/12 flex-col items-start justify-between gap-8 md:w-9/12 md:flex-row md:items-center md:gap-4"
		>
			<!-- Info Section -->
			<div class="space-y-4">
				<h2 class="text-3xl font-bold md:text-4xl">Thank you!</h2>
				<div class="space-y-2">
					<p>
						This website is made with
						<span v-for="(tech, index) in techStack" :key="tech.url">
							<a
								:href="tech.url"
								:aria-label="tech.name"
								class="hover:text-primary underline transition-colors"
							>
								{{ tech.name }}
							</a>
							<template v-if="index < techStack.length - 1">
								<span class="mx-1">and</span>
							</template>
						</span>
					</p>
					<p v-for="tool in tools" :key="tool.url">
						Made using
						<a
							:href="tool.url"
							:aria-label="tool.ariaLabel"
							class="hover:text-primary underline transition-colors"
						>
							{{ tool.name }}
						</a>
					</p>
					<p v-for="deploy in deployment" :key="deploy.url">
						Deployed on
						<a
							:href="deploy.url"
							:aria-label="deploy.ariaLabel"
							class="hover:text-primary underline transition-colors"
						>
							{{ deploy.name }}
						</a>
					</p>
				</div>
			</div>
			<!-- Social Links -->
			<div
				class="grid grid-cols-1 grid-rows-2 gap-4 gap-x-10 gap-y-4 text-base md:grid-cols-2 md:grid-rows-2"
			>
				<a
					v-for="link in socialLinks"
					:key="link.name"
					:href="link.url"
					:aria-label="link.ariaLabel"
					class="hover:text-primary flex items-center gap-2 transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						:name="link.icon"
						:size="link.iconProps?.size || 20"
						:weight="link.iconProps?.weight"
					/>
					{{ link.name }}
				</a>
			</div>
		</div>
	</footer>
</template>
