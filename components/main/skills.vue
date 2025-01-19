<script setup>
const skills = [
   // Operating Systems
   { name: "PowerShell", icon: "mdi:microsoft-windows" },
   { name: "Linux", icon: "devicon-plain:linux" },

   // Web Development
   { name: "HTML5", icon: "devicon-plain:html5" },
   { name: "CSS3", icon: "devicon-plain:css3" },
   { name: "SASS", icon: "simple-icons:sass" },
   { name: "Tailwind", icon: "simple-icons:tailwindcss" },
   { name: "JavaScript", icon: "devicon-plain:javascript" },
   { name: "Vue.js", icon: "devicon-plain:vuejs" },
   { name: "Svelte", icon: "devicon-plain:svelte" },
   { name: "Nuxt", icon: "devicon-plain:nuxtjs" },
   { name: "Laravel", icon: "devicon-plain:laravel" },
   { name: "Blazor", icon: "simple-icons:blazor" },

   // Programming Languages
   { name: "Java", icon: "devicon-plain:java" },
   { name: "Kotlin", icon: "devicon-plain:kotlin" },
   { name: "Python", icon: "devicon-plain:python" },
   { name: ".Net", icon: "devicon-plain:dotnetcore" },

   // Databases
   { name: "MySQL", icon: "devicon-plain:mysql" },
   { name: "SQL Server", icon: "devicon-plain:microsoftsqlserver" },
   { name: "MongoDB", icon: "devicon-plain:mongodb" },

   // Tools
   { name: "Docker", icon: "devicon-plain:docker" },
   { name: "Arduino", icon: "devicon-plain:arduino" },
   { name: "Android", icon: "devicon-plain:androidstudio" },
   { name: "Markdown", icon: "simple-icons:markdown" },
];
</script>

<template>
   <ul id="skills" class="mt-6 flex flex-wrap gap-x-6 gap-y-8 text-4xl">
      <li v-for="skill in skills" :key="skill.name">
         <div class="icon">
            <Icon :name="skill.icon" :title="skill.name" />
            <span class="icon-title text-center">{{ skill.name }}</span>
         </div>
      </li>
   </ul>
</template>

<style scoped>
.icon {
   font-size: 2.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: transform 0.2s ease-in-out;
   position: relative;
}

.icon:hover {
   transform: translateY(-0.5rem);
}

.icon-title {
   visibility: hidden;
   text-align: center;
   font-size: 1rem;
   position: absolute;
   opacity: 0;
   transition:
      opacity 0.3s,
      visibility 0.3s;
   font-family: "Poppins", sans-serif;
   font-weight: bold;
   top: 100%;
   margin-top: 0.2rem;
   line-height: 1.2;
}

.icon:hover .icon-title {
   visibility: visible;
   opacity: 1;
}
</style>
