<template>
  <div class="bg-[#F1F2F4] dark:bg-slate-950 dark:text-zinc-300">
    <div class="gd-container font-spacegrotesk">
      <header class="fixed z-10 w-full bg-[#F1F2F4] dark:bg-slate-950">
        <MainHeader />
      </header>
      <main class="pb-10 pt-20">
        <slot />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .gd-container {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }
</style>
