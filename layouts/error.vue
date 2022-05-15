<template>
  <main>
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <h1 v-if="error.statusCode === 404">this doesn't exist...</h1>
    <h1 v-else-if="error.statusCode === 402">you're not allowed there</h1>
    <h1 v-else>i probably broke something lol</h1>
    <nav>
      <nuxt-link to="/"
        >main
        <font-awesome-icon
          :icon="['fas', 'up-right-from-square']"
          class="fa-1x"
        />
      </nuxt-link>
      <nuxt-link to="/dev"
        >dev
        <font-awesome-icon
          :icon="['fas', 'up-right-from-square']"
          class="fa-1x"
      /></nuxt-link>
      <nuxt-link to="/art"
        >art
        <font-awesome-icon
          :icon="['fas', 'up-right-from-square']"
          class="fa-1x"
      /></nuxt-link>
    </nav>
  </main>
</template>

<style scoped>
main {
  background-color: var(--purple);
  color: var(--beige);
  height: 100vh;
  padding: var(--space-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h1 {
  font-size: var(--xl);
  text-align: center;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  font-size: var(--lg);
  gap: 0.5rem;
}

nav a {
  text-decoration: none;
  color: var(--beige);
}

nav a:hover {
  color: var(--black);
}

nav svg {
  margin-left: 1rem;
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
