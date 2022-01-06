<template>
<main>
  <SharedNav />
  <SharedMarquee text="hi, i'm makena kong" />
  <NuxtLink to="/dev">dev</NuxtLink>
  <NuxtLink to="art">art</NuxtLink>
</main>
</template>

<script lang="ts">
import Vue from 'vue'
import SharedNav from '~/components/SharedNav.vue'

export default Vue.extend({
  components: { SharedNav },
  name: 'IndexPage',
})
</script>
