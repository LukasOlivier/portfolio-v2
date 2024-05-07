<script setup lang="ts">

</script>

<template>
  <footer
    id="contact" class="py-10 mt-20 bg-black dark:bg-opacity-30 bg-opacity-5"
  >
    <div class="w-9/12 mx-auto flex justify-between items-center">
      <ul class="flex flex-col gap-1">
        <li>
          <h4 class="text-4xl font-bold mb-2">
            Thank you!
          </h4>
        </li>
        <li>
          <p>
            This website is made with <a class="underline" href="https://nuxt.com/">Nuxt 3</a> and <a class="underline" href="https://tailwindcss.com/">Tailwind</a>
          </p>
        </li>
        <li><p>Made using <a href="https://code.visualstudio.com/">Visual Studio Code</a></p></li>
        <li><p>Hosted on <a class="underline" href="https://www.cloudflare.com/">Cloudflare</a></p></li>
      </ul>

      <ul id="social-links" class="grid grid-cols-2 gap-x-10 gap-y-2">
        <li>
          <p>
            <i class="fa-brands fa-linkedin" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lukas-olivier-a19862231/"
            >LukasOlivier</a>
          </p>
        </li>
        <li>
          <p>
            <i class="fa-brands fa-github" />
            <a target="_blank" href="https://github.com/LukasOlivier">LukasOlivier</a>
          </p>
        </li>
        <li>
          <p>
            <i class="fa-brands fa-instagram" />
            <a target="_blank" href="https://www.instagram.com/lukasoli4/">LukasOli4</a>
          </p>
        </li>
        <li>
          <p>
            <i class="fa-brands fa-facebook" />
            <a target="_blank" href="https://www.facebook.com/LukasOlivier2">LukasOlivier2</a>
          </p>
        </li>
        <li>
          <p>
            <i class="fa-regular fa-envelope" />
            <a href="mailto:mail@lukasolivier.be ">mail@lukasolivier.be</a>
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
