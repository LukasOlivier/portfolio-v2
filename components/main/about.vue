<template>
   <section id="about-me" class="mx-auto flex w-9/12 justify-between py-20">
      <div class="flex flex-col sm:w-full md:w-3/5">
         <h2
            class="mb-5 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
         >
            About me
         </h2>
         <p>
            As a {{ new Date().getFullYear() - 2003 }}-year-old software
            engineering student, I have a deep passion for programming and
            technology. Besides my studies, I actively contribute to a youth
            movement, and I find creative expression through drumming in my free
            time. <br /><br />

            This year marks the final year in the bachelor's program in software
            engineering at Howest Brugge. I'm a fast learner, always eager to
            acquire new knowledge. While I thrive in team environments and am
            ready to assist others, I am equally capable of working
            independently. As a perfectionist, I strive to deliver the best
            possible results.<br /><br />

            I am currently learning
            <a
               class="underline"
               aria-label="Nuxt 3"
               target="_blank"
               href="https://nuxt.com/"
               >Nuxt 3</a
            >
            and
            <a
               class="underline"
               target="_blank"
               aria-label="Tailwind CSS"
               href="https://tailwindcss.com/"
               >Tailwind CSS</a
            >
            to create websites like this one. Find all my projects on
            <NuxtLink
               aria-label="Projects Page"
               class="underline"
               href="/projects"
            >
               my projects page.
            </NuxtLink>
            Or read about my experiences as a software engineering student on
            <NuxtLink aria-label="Blogs Page" class="underline" href="/blogs">
               my blog.
            </NuxtLink>
            <br /><br />
         </p>
         <h2
            class="text-xl font-semibold leading-tight text-black dark:text-white"
         >
            Things I've worked with so far:
         </h2>
         <MainSkills />
      </div>
      <LogoAbout class="w-1/4 sm:hidden md:block" />
   </section>
</template>
