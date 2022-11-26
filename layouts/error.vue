<template>
  <main>
    <nav class="section-nav">
      <Logo />
      <div class="section-nav__links">
        <NuxtLink to="/dev">dev</NuxtLink>
        <NuxtLink to="/art">art</NuxtLink>
      </div>
    </nav>
    <div class="content">
      <h1 v-if="error.statusCode === 404">this doesn't exist...</h1>
      <h1 v-else-if="error.statusCode === 402">you're not allowed there</h1>
      <h1 v-else>i probably broke something lol</h1>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: var(--space-1);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
}

h1 {
  font-size: var(--xl);
  font-family: var(--space);
  text-align: center;
}

.section-nav {
  display: flex;
  align-items: flex-start;
  gap: var(--space-1);
}

.section-nav__links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-1);
  width: 100%;
  font-weight: 800;
}

.section-nav__links a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.section-nav__links a:hover {
  color: var(--magenta);
}
</style>

<script lang="ts">
import Vue from "vue";

import Logo from "~/components/Logo.vue";

export default Vue.extend({
  props: ["error"],
  components: { Logo },
});
</script>
