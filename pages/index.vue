<template>
<main>
  <Logo />
  <SharedMarquee text="hi, i'm makena kong" />
  <NuxtLink to="/dev">dev</NuxtLink>
  <NuxtLink to="art">art</NuxtLink>
  <button @click="showMessageFromBackend">Show message from backend</button>
</main>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/assets/logos/logo.svg?inline';

export default Vue.extend({
  components: { Logo },
  name: 'IndexPage',
  methods: {
    async showMessageFromBackend () {
      try {
        const response = await this.$axios.get('/api/hello')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }

    }
  }
})
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  font-size: 6rem;
  margin: 2rem;
}
</style>