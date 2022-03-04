<template>
<main>
  <Logo />
  <h1>
    hi, i'm makena kong.
    check out my <NuxtLink to="/dev">dev</NuxtLink> stuff or 
    check out my <NuxtLink to="art">art</NuxtLink> stuff
  </h1>
  <!--<button @click="showMessageFromBackend">Show message from backend</button>-->
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
main {
  padding: var(--space-1);
}
h1 {
  margin: var(--space-y-2);
  font-size: var(--xxl);
  line-height: 100%;
}
a {
  color: black;
}
</style>