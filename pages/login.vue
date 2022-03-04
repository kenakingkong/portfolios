<template>
  <main>
    <nuxt-link to="/"><Logo /></nuxt-link>
    <div>
      <button v-if="isLoggedIn" @click="logOut">Log Out</button>
      <button v-else @click="logIn">Log in</button>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: var(--space-1);
}

div {
  margin: var(--space-y-1);
}
</style>

<script lang="ts">
import Logo from '~/assets/logos/logo.svg?inline'

export default {
  name: 'LoginPage',
  components: { Logo },
  data: () => ({
    isLoggedIn: false,
  }),
  created() {
    this.isLoggedIn = this.$auth.loggedIn
  },
  methods: {
    logIn() {
      this.$auth.loginWith('github')
    },
    logOut() {
      this.$auth.logout('github')
    },
  },
}
</script>