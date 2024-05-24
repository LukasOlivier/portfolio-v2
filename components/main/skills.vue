<script setup>
const skills = [
  { name: 'PowerShell', icon: 'devicon-windows8-original' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'SASS', icon: 'devicon-sass-original' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Arduino', icon: 'devicon-arduino-plain' },
  { name: 'Laravel', icon: 'devicon-laravel-plain' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
  { name: 'Svelte', icon: 'devicon-svelte-plain' },
  { name: 'Nuxt', icon: 'devicon-nuxtjs-plain' },
  { name: 'Blazor', icon: 'devicon-blazor-original' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'Neo4j', icon: 'devicon-neo4j-plain' },
  { name: 'Microsoft SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'Android', icon: 'devicon-androidstudio-plain' },
  { name: '.Net', icon: 'devicon-dotnetcore-plain' },
  { name: 'Prometheus', icon: 'devicon-prometheus-original' },
  { name: 'Grafana', icon: 'devicon-grafana-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'Markdown', icon: 'devicon-markdown-original' },
]
</script>

<template>
  <ul id="skills" class="flex flex-wrap gap-8 mt-8">
    <li v-for="skill in skills" :key="skill.name" class="relative flex flex-col items-center">
      <i class="text-4xl transition-transform transform hover:translate-y-[-0.5rem]" :class="[skill.icon]" :title="skill.name" />
      <span class="absolute mt-16 text-sm font-medium text-center text-transparent transition-opacity duration-300 hover:text-black">{{ skill.name }}</span>
    </li>
  </ul>
</template>
