<template>
  <main>
    <NavBar>
      <template v-slot:nav-links>
        <NavLinks />
      </template>
    </NavBar>
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
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["error"],
});
</script>
