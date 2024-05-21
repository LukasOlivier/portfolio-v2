<template>
  <footer
    id="contact" class="py-10 mt-20 bg-black dark:bg-opacity-30 bg-opacity-5"
  >
    <div class="w-9/12 mx-auto flex justify-between items-center gap-4 ">
      <ul class="flex flex-col gap-1 ">
        <li>
          <p class="text-4xl font-bold mb-2">
            Thank you!
          </p>
        </li>
        <li>
          <p>
            This website is made with <a class="underline" href="https://nuxt.com/">Nuxt 3</a> and <a class="underline" href="https://tailwindcss.com/">Tailwind CSS</a>
          </p>
        </li>
        <li><p>Made using <a class="underline" href="https://code.visualstudio.com/">Visual Studio Code</a></p></li>
        <li><p>Hosted on <a class="underline" href="https://vercel.com/">Vercel</a></p></li>
      </ul>
      <ul
        id="social-links" class="grid grid-cols-2 gap-x-10 gap-y-2"
      >
        <li>
          <p class="sm:text-2xl md:text-base">
            <a target="_blank" href="https://www.linkedin.com/in/lukas-olivier-a19862231/">
              <i class="fa-brands fa-linkedin mr-2" />
              <span class="sm:hidden md:inline">LukasOlivier</span>
            </a>
          </p>
        </li>
        <li>
          <p class="sm:text-2xl md:text-base">
            <a target="_blank" href="https://github.com/LukasOlivier">
              <i class="fa-brands fa-github mr-2" />
              <span class="sm:hidden md:inline">LukasOlivier</span>
            </a>
          </p>
        </li>
        <li>
          <p class="sm:text-2xl md:text-base">
            <a target="_blank" href="https://www.instagram.com/lukasoli4/">
              <i class="fa-brands fa-instagram mr-2" />
              <span class="sm:hidden md:inline">LukasOli4</span>
            </a>
          </p>
        </li>
        <li>
          <p class="sm:text-2xl md:text-base">
            <a target="_blank" href="https://www.facebook.com/LukasOlivier2">
              <i class="fa-brands fa-facebook mr-2 " />
              <span class="sm:hidden md:inline">LukasOlivier2</span>
            </a>
          </p>
        </li>
        <li>
          <p class="sm:text-2xl md:text-base">
            <a href="mailto:mail@lukasolivier.be ">
              <i class="fa-regular fa-envelope mr-2 " />
              <span class="sm:hidden md:inline">mail@lukasolivier.be</span>
            </a>
          </p>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer-dark{
  background-color: rgba(0, 0, 0, 0.411);
}

.footer-light{
  background-color: rgba(255, 255, 255, 0.411);
}

#social-links li p{
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
