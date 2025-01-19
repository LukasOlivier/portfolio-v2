<template>
	<div class="mx-auto mb-5">
		<div class="grid items-center gap-5 sm:grid-cols-1 md:grid-cols-2">
			<div v-motion-slide-visible-once-top>
				<h1
					class="my-5 text-4xl font-semibold leading-tight text-black dark:text-zinc-300 md:text-5xl"
				>
					Welcome to my blog!
				</h1>
				<p class="dark:text-zinc-300">
					Here you will find all the blog posts I have written & published.
				</p>
			</div>
			<div class="scale-50 justify-self-center sm:hidden lg:block">
				<LogoBlog v-motion-slide-visible-once-right />
			</div>
		</div>
	</div>
</template>
