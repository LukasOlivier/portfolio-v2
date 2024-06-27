<template>
   <footer
      id="contact"
      class="mt-20 bg-black bg-opacity-5 py-10 dark:bg-opacity-30"
   >
      <div class="mx-auto flex w-9/12 items-center justify-between gap-4">
         <ul class="flex flex-col gap-1">
            <li>
               <p class="mb-2 text-4xl font-bold">Thank you!</p>
            </li>
            <li>
               <p>
                  This website is made with
                  <a
                     aria-label="Nuxt 3"
                     class="underline"
                     href="https://nuxt.com/"
                     >Nuxt 3</a
                  >
                  and
                  <a class="underline" href="https://tailwindcss.com/"
                     >Tailwind CSS</a
                  >
               </p>
            </li>
            <li>
               <p>
                  Made using
                  <a
                     aria-label="Visit Visual Studio Code website"
                     class="underline"
                     href="https://code.visualstudio.com/"
                     >Visual Studio Code</a
                  >
               </p>
            </li>
            <li>
               <p>
                  Hosted on
                  <a
                     aria-label="Visit Vercel website"
                     class="underline"
                     href="https://vercel.com/"
                     >Vercel</a
                  >
               </p>
            </li>
         </ul>
         <ul
            id="social-links"
            class="grid grid-cols-2 gap-x-10 gap-y-2 sm:text-2xl md:text-lg"
         >
            <li>
               <p c>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/lukas-olivier-a19862231/"
                     aria-label="linkedin"
                  >
                     <i class="devicon-linkedin-plain mr-2" />
                     <span class="sm:hidden md:inline">LukasOlivier</span>
                  </a>
               </p>
            </li>
            <li>
               <p>
                  <a
                     target="_blank"
                     href="https://github.com/LukasOlivier"
                     aria-label="github"
                  >
                     <i class="devicon-github-original mr-2" />
                     <span class="sm:hidden md:inline">LukasOlivier</span>
                  </a>
               </p>
            </li>
            <li>
               <p>
                  <a href="mailto:mail@lukasolivier.be " aria-label="mail">
                     <i class="fa fa-envelope mr-2" />
                     <span class="sm:hidden md:inline"
                        >mail@lukasolivier.be</span
                     >
                  </a>
               </p>
            </li>
         </ul>
      </div>
   </footer>
</template>

<style scoped>
.footer-dark {
   background-color: rgba(0, 0, 0, 0.411);
}

.footer-light {
   background-color: rgba(255, 255, 255, 0.411);
}

#social-links li p {
   display: flex;
   align-items: center;
   gap: 1rem;
}
</style>
