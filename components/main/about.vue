<template>
	<section id="about-me" class="mx-auto flex w-9/12 justify-between py-20">
		<div class="flex w-full flex-col md:w-3/5">
			<h2
				class="mb-5 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
			>
				About Me
			</h2>

			<p class="mb-5">
				Hi there! 👋 I'm a {{ new Date().getFullYear() - 2003 }}-year-old
				<span class="highlight">industrial engineering student at UGent</span>
				with a passion for technology. Alongside my studies, I've started my
				journey as a
				<span class="highlight">student freelancer,</span>
				specializing in software development.
			</p>

			<p class="mb-5">
				<span class="section-title">🚀 What I Do</span>
				I help individuals and businesses bring their ideas to life. Whether
				it's building a sleek
				<span class="highlight">website, progressive web app,</span>
				or a
				<span class="highlight">RESTful API,</span>
				I can help you create a digital solution that meets your needs.
			</p>

			<p class="mb-5">
				<span class="section-title">🌟 Beyond Work</span>

				When I'm not coding, you'll find me contributing to a
				<span class="highlight">youth movement,</span>
				exploring my creative side through design, or learning new skills to
				push myself further.
			</p>

			<p class="mb-10">
				<span class="section-title">🌐 Let's Build Something Together</span>
				Ready to turn your ideas into reality? Check out
				<NuxtLink
					aria-label="Projects Page"
					class="highlight underline"
					href="/projects"
				>
					my Projects page
				</NuxtLink>
				to see what I've worked on.
				<br />
				Let's create something amazing!
			</p>

			<h2 class="text-xl font-semibold leading-tight">
				Things I've worked with so far:
			</h2>
			<MainSkills />
		</div>
		<LogoAbout class="hidden w-1/4 md:block" />
	</section>
</template>

<style scoped>
	.highlight {
		font-weight: 600;
	}
	.section-title {
		font-weight: 700;
		display: block;
	}
</style>
