<template>
<main>
  <SharedNav />
  <SharedMarquee text="hi, i'm makena kong" />
  <NuxtLink to="/dev">dev</NuxtLink>
  <NuxtLink to="art">art</NuxtLink>
  <button @click="showMessageFromBackend">Show message from backend</button>
</main>
</template>

<script lang="ts">
import Vue from 'vue'
import SharedNav from '~/components/SharedNav.vue'

export default Vue.extend({
  components: { SharedNav },
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
