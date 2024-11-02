<script setup>
const skills = [
   { name: "PowerShell", icon: "devicon-windows8-original" },
   { name: "Linux", icon: "devicon-linux-plain" },
   { name: "HTML5", icon: "devicon-html5-plain" },
   { name: "CSS3", icon: "devicon-css3-plain" },
   { name: "SASS", icon: "devicon-sass-original" },
   { name: "JavaScript", icon: "devicon-javascript-plain" },
   { name: "Java", icon: "devicon-java-plain" },
   { name: "Kotlin", icon: "devicon-kotlin-plain" },
   { name: "Docker", icon: "devicon-docker-plain" },
   { name: "Arduino", icon: "devicon-arduino-plain" },
   { name: "Laravel", icon: "devicon-laravel-plain" },
   { name: "Vue.js", icon: "devicon-vuejs-plain" },
   { name: "Svelte", icon: "devicon-svelte-plain" },
   { name: "Nuxt", icon: "devicon-nuxtjs-plain" },
   { name: "Blazor", icon: "devicon-blazor-original" },
   { name: "MySQL", icon: "devicon-mysql-plain" },
   { name: "Neo4j", icon: "devicon-neo4j-plain" },
   { name: "Microsoft SQL Server", icon: "devicon-microsoftsqlserver-plain" },
   { name: "MongoDB", icon: "devicon-mongodb-plain" },
   { name: "Android", icon: "devicon-androidstudio-plain" },
   { name: ".Net", icon: "devicon-dotnetcore-plain" },
   { name: "Prometheus", icon: "devicon-prometheus-original" },
   { name: "Grafana", icon: "devicon-grafana-plain" },
   { name: "Python", icon: "devicon-python-plain" },
   { name: "Markdown", icon: "devicon-markdown-original" },
];
</script>

<template>
   <ul id="skills" class="mt-6 flex flex-wrap gap-x-6 gap-y-8 text-4xl">
      <li v-for="skill in skills" :key="skill.name">
         <i :class="skill.icon" :title="skill.name">
            <span class="icon-title">{{ skill.name }}</span>
         </i>
      </li>
   </ul>
</template>

<style scoped>
i {
   font-size: 2.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: transform 0.2s ease-in-out;
   position: relative;
}

i:hover {
   transform: translateY(-0.5rem);
}

.icon-title {
   visibility: hidden;
   text-align: center;
   font-size: 1rem;
   position: absolute;
   opacity: 0;
   transition: opacity 0.3s;
   font-family: "Poppins", sans-serif;
   font-weight: bold;
   top: 100%;
   margin-top: 0.5rem;
}

i:hover .icon-title {
   visibility: visible;
   opacity: 1;
}
</style>
