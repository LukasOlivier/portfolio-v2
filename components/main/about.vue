<template>
   <section id="about-me" class="mx-auto flex w-9/12 justify-between py-20">
      <div class="flex flex-col sm:w-full md:w-3/5">
         <h2
            class="mb-5 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
         >
            About Me
         </h2>
         <p class="mb-5">
            Hi there! 👋 I'm a {{ new Date().getFullYear() - 2003 }}-year-old
            <strong>industrial engineering student at UGent</strong> with a
            passion for technology . Alongside my studies, I've started my
            journey as a <strong>student freelancer</strong>, specializing in
            software development.
         </p>
      
         <p class="mb-5"> 
            <strong>🚀 What I Do</strong><br />
            I help individuals and businesses bring their ideas to life. Whether
            it's building a sleek <strong>website</strong>,
            <strong> progressive web app</strong>, or a
            <strong>RESTful API</strong>, I can help you create a digital
            solution that meets your needs.
         </p>
       
         <p class="mb-5">
            <strong>🌟 Beyond Work</strong><br />
            When I'm not coding, you'll find me contributing to a
            <strong>youth movement</strong>, exploring my creative side through
            , or learning new skills to push myself further.
         </p>

         <p class="mb-10">
            <strong>🌐 Let's Build Something Together</strong><br />
            Ready to turn your ideas into reality? Check out
            <NuxtLink
               aria-label="Projects Page"
               class="underline"
               href="/projects"
            >
               my Projects page
            </NuxtLink>
            to see what I've worked on. <br />
            Let's create something amazing!
         </p>

         <h2
            class="text-xl font-semibold leading-tight "
         >
            Things I've worked with so far:
         </h2>
         <MainSkills />
      </div>
      <LogoAbout class="w-1/4 sm:hidden md:block" />
   </section>
</template>
