<script setup>
  const skills = [
    // Operating Systems
    { name: 'PowerShell', icon: 'mdi:microsoft-windows' },
    { name: 'Linux', icon: 'devicon-plain:linux' },

    { name: '---', icon: 'material-symbols:stat-0-rounded' },

    // Web Development
    { name: 'HTML5', icon: 'devicon-plain:html5' },
    { name: 'CSS3', icon: 'devicon-plain:css3' },
    { name: 'SASS', icon: 'simple-icons:sass' },
    { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
    { name: 'JavaScript', icon: 'devicon-plain:javascript' },
    { name: 'TypeScript', icon: 'devicon-plain:typescript' },
    { name: 'Vue.js', icon: 'devicon-plain:vuejs' },
    { name: 'Svelte', icon: 'devicon-plain:svelte' },
    { name: 'Nuxt', icon: 'devicon-plain:nuxtjs' },
    { name: 'React', icon: 'simple-icons:react' },
    { name: 'Next.js', icon: 'simple-icons:nextdotjs' },

    { name: '---', icon: 'material-symbols:stat-0-rounded' },

    // API
    { name: 'Node.js', icon: 'devicon-plain:nodejs' },
    { name: 'Express.js', icon: 'simple-icons:express' },
    { name: 'Bun', icon: 'simple-icons:bun' },
    { name: 'Prisma', icon: 'simple-icons:prisma' },
    { name: 'Drizzle ORM', icon: 'simple-icons:drizzle' },
    { name: 'Hono', icon: 'simple-icons:hono' },

    { name: '---', icon: 'material-symbols:stat-0-rounded' },

    // Programming Languages
    { name: 'Java', icon: 'devicon-plain:java' },
    { name: 'Kotlin', icon: 'devicon-plain:kotlin' },
    { name: 'Python', icon: 'devicon-plain:python' },
    { name: '.Net', icon: 'devicon-plain:dotnetcore' },
    { name: 'Blazor', icon: 'simple-icons:blazor' },

    { name: '---', icon: 'material-symbols:stat-0-rounded' },

    // Databases
    { name: 'MySQL', icon: 'devicon-plain:mysql' },
    { name: 'SQL Server', icon: 'devicon-plain:microsoftsqlserver' },
    { name: 'PostgreSQL', icon: 'devicon-plain:postgresql' },
    { name: 'MongoDB', icon: 'devicon-plain:mongodb' },

    { name: '---', icon: 'material-symbols:stat-0-rounded' },

    // Tools
    { name: 'Docker', icon: 'devicon-plain:docker' },
    { name: 'Arduino', icon: 'devicon-plain:arduino' },
    { name: 'Android', icon: 'devicon-plain:androidstudio' },
  ];
</script>

<template>
  <ul
    id="skills"
    class="mt-6 flex flex-wrap justify-between gap-x-6 gap-y-8 text-4xl md:justify-start"
  >
    <li v-for="skill in skills" :key="skill.name">
      <div v-if="skill.name === '---'">
        <Icon
          :name="skill.icon"
          :title="skill.name"
          class="w-3 h-5 text-gray-700 dark:text-gray-400"
        />
      </div>
      <div v-else class="icon">
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
    font-family: 'Poppins', sans-serif;
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
