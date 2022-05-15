<template>
  <main>
    <nav>
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <button @click="logOut">log out</button>
    </nav>
    <div>
      <p>this is where you edit all the stuff!</p>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: var(--space-1);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: var(--space-y-2);
}
</style>

<script lang="ts">
import Logo from "~/components/Logo.vue";

export default {
  name: "EditIndexPage",
  components: { Logo },
  middleware: "auth",
  methods: {
    logOut() {
      this.$auth.logout("github");
    },
  },
};
</script>