<script setup>
	import Typewriter from 'typewriter-effect/dist/core';

	const typeWriterElement = ref(null);

	onMounted(() => {
		document.querySelector('.typeWriter').innerText = '';
		const typewriter = new Typewriter(typeWriterElement.value, {
			loop: true,
			delay: 15,
		});

		typewriter
			.typeString('Freelance Developer')
			.pauseFor(2000)
			.deleteAll()
			.typeString('Student Software Engineering')
			.pauseFor(1000)
			.deleteAll()
			.typeString('Musician')
			.pauseFor(1000)
			.deleteAll()
			.typeString("Head leader 'KSA Izegem'")
			.pauseFor(1000)
			.deleteAll()
			.start();
	});
</script>

<template>
	<div class="flex h-screen flex-col">
		<section id="home" class="mx-auto mt-52 w-9/12 xl:w-1/3">
			<h1
				class="text-6xl font-semibold leading-tight text-black dark:text-white md:text-7xl"
				style="font-display: swap"
			>
				Lukas Olivier
			</h1>
			<p class="mb-5 text-xl font-medium text-zinc-700 dark:text-zinc-300">
				Founder of Izybit &
				<span ref="typeWriterElement" class="typeWriter">Koas</span>
			</p>

			<NuxtLink
				class="rounded-md border-2 px-4 py-2 font-semibold text-black transition-all duration-200 ease-in-out hover:bg-black hover:text-white dark:text-zinc-300 dark:hover:bg-white dark:hover:text-black"
				to="/projects"
			>
				Check my projects!
			</NuxtLink>
		</section>
		<NuxtImg
			format="webp"
			class="absolute bottom-40 left-10 hidden w-60 opacity-50 invert dark:invert-0 xl:block"
			src="/patterns/pattern4.webp"
			alt="swiggle"
			quality="50"
			width="400"
			height="262"
			title="swiggle"
		/>

		<NuxtImg
			format="webp"
			class="absolute bottom-40 right-0 hidden w-1/5 opacity-50 invert dark:invert-0 md:block"
			src="/patterns/pattern5.webp"
			alt="pattern"
			quality="50"
			width="200"
			height="364"
			title="pattern"
		/>
		<NuxtLink
			aria-label="Scroll down to about me"
			class="absolute bottom-10 flex w-full justify-center text-black dark:text-white"
			href="#about-me"
		>
			<Icon id="down-arrow" name="mdi:chevron-down" size="48" />
		</NuxtLink>
	</div>
</template>

<style scoped>
	button {
		background: linear-gradient(to right, #fff 50%, #00000000 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: all 0.5s ease;
	}

	button:hover {
		background-position: left bottom;
	}

	#down-arrow {
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}

		40% {
			transform: translateY(-15px);
		}

		60% {
			transform: translateY(-5px);
		}
	}
</style>
