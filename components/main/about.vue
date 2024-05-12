<template>
  <section id="about-me" class="w-9/12 mx-auto py-20 flex justify-between">
    <div class="sm:w-full md:w-3/5 flex flex-col">
      <h1
        class="
        text-black
        dark:text-white
        font-semibold
        leading-tight
        text-4xl
        md:text-5xl
        mb-5"
      >
        About me
      </h1>
      <p>
        I am a {{ new Date().getFullYear() - 2003 }}-year-old software engineering student, deeply passionate
        about programming and technology. In addition to my studies, I
        actively contribute to a youth movement, and in my free time I
        find creative expression in drumming.
        <br><br>
        This year I am starting my final year of my bachelor's degree in
        software engineering at Howest Brugge. I am looking for an
        internship in the field of software engineering. I am open to all
        kinds of opportunities, but I am especially interested in web
        development and mobile development.
        <br><br>
        I am a fast learner and I am always eager to learn new things. I
        am a team player and I am always ready to help others, but I can
        also work independently. I am a perfectionist and I always strive
        to deliver the best possible result.
        <br><br>
      </p>
      <h2
        class="
        text-black
        dark:text-white
        font-semibold
        leading-tight
        text-xl"
      >
        Things I've worked with so far:
      </h2>
      <MainSkills />
    </div>
    <LogoAbout class="w-1/4 sm:hidden md:block" />
  </section>
</template>
