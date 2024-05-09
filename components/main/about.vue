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
        This year Iam starting my final year of my bachelor's degree in
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

      <ul id="skills" class="flex flex-wrap  mt-5">
        <!-- PowerShell -->
        <li>
          <i class="devicon-windows8-original" title="PowerShell">
            <span class="icon-title">PowerShell</span>
          </i>
        </li>

        <!-- Linux -->
        <li>
          <i class="devicon-linux-plain" title="Linux">
            <span class="icon-title">Linux</span>
          </i>
        </li>

        <!-- HTML5 -->
        <li>
          <i class="devicon-html5-plain" title="HTML5">
            <span class="icon-title">HTML5</span>
          </i>
        </li>

        <!-- CSS3 -->
        <li>
          <i class="devicon-css3-plain" title="CSS3">
            <span class="icon-title">CSS3</span>
          </i>
        </li>

        <!-- SASS -->
        <li>
          <i class="devicon-sass-original" title="SASS">
            <span class="icon-title">SASS</span>
          </i>
        </li>

        <!-- JavaScript -->
        <li>
          <i class="devicon-javascript-plain" title="JavaScript">
            <span class="icon-title">JavaScript</span>
          </i>
        </li>

        <!-- Java -->
        <li>
          <i class="devicon-java-plain" title="Java">
            <span class="icon-title">Java</span>
          </i>
        </li>

        <!-- Kotlin -->
        <li>
          <i class="devicon-kotlin-plain" title="Kotlin">
            <span class="icon-title">Kotlin</span>
          </i>
        </li>

        <!-- Docker -->
        <li>
          <i class="devicon-docker-plain" title="Docker">
            <span class="icon-title">Docker</span>
          </i>
        </li>

        <!-- Arduino -->
        <li>
          <i class="devicon-arduino-plain" title="Arduino">
            <span class="icon-title">Arduino</span>
          </i>
        </li>

        <!-- Laravel -->
        <li>
          <i class="devicon-laravel-plain" title="Laravel">
            <span class="icon-title">Laravel</span>
          </i>
        </li>

        <!-- Vue.js -->
        <li>
          <i class="devicon-vuejs-plain" title="Vue.js">
            <span class="icon-title">Vue.js</span>
          </i>
        </li>

        <!-- Svelte -->
        <li>
          <i class="devicon-svelte-plain" title="Svelte">
            <span class="icon-title">Svelte</span>
          </i>
        </li>

        <!-- Nuxt -->
        <li>
          <i class="devicon-nuxtjs-plain" title="Nuxt">
            <span class="icon-title">Nuxt</span>
          </i>
        </li>

        <!-- Blazor -->
        <li>
          <i class="devicon-blazor-original" title="Blazor">
            <span class="icon-title">Blazor</span>
          </i>
        </li>

        <!-- MySQL -->
        <li>
          <i class="devicon-mysql-plain" title="MySQL">
            <span class="icon-title">MySQL</span>
          </i>
        </li>

        <!-- Neo4j -->
        <li>
          <i class="devicon-neo4j-plain" title="Neo4j">
            <span class="icon-title">Neo4j</span>
          </i>
        </li>

        <!-- Microsoft SQL Server -->
        <li>
          <i
            class="devicon-microsoftsqlserver-plain"
            title="Microsoft SQL Server"
          >
            <span class="icon-title">Microsoft SQL Server</span>
          </i>
        </li>

        <!-- MongoDB -->
        <i class="devicon-mongodb-plain" title="MongoDB">
          <span class="icon-title">MongoDB</span>
        </i>

        <!-- Android -->
        <i class="devicon-androidstudio-plain" title="Android">
          <span class="icon-title">Android</span>
        </i>

        <!-- .Net -->
        <i class="devicon-dotnetcore-plain" title=".Net">
          <span class="icon-title">.Net</span>
        </i>

        <!-- Prometheus -->
        <i class="devicon-prometheus-original" title="Prometheus">
          <span class="icon-title">Prometheus</span>
        </i>

        <!-- Grafana -->
        <i class="devicon-grafana-plain" title="Grafana">
          <span class="icon-title">Grafana</span>
        </i>

        <!-- Python -->
        <i class="devicon-python-plain" title="Python">
          <span class="icon-title">Python</span>
        </i>

        <!-- Markdown -->
        <i class="devicon-markdown-original">
          <span class="icon-title">Markdown</span>
        </i>
      </ul>
    </div>
    <LogoAbout class="w-1/4 sm:hidden md:block" />
  </section>
</template>

<style scoped>
/* Import Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
#skills {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

i{
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
}
i:hover {
    transform: translate(0, -0.5rem);
}
i:hover .icon-title {
    visibility: visible;
    opacity: 1;
}
.icon-title {
    visibility: hidden;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    font-family: 'Poppins', sans-serif;
    margin-top: 4rem;
}
</style>
