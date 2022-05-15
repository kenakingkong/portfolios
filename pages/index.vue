<template>
  <main>
    <Logo />
    <h1>
      hi, i'm makena kong. check out my <a href="/dev" class="">dev</a> page or
      check out my <a href="/art" class="">art</a> page
    </h1>
    <!--<button @click="showMessageFromBackend">Show message from backend</button>-->
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo"

export default Vue.extend({
  name: "IndexPage",
   components: { Logo },
  head() {
    return {
      title: "makena <3",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "i'm makena kong and this is my website",
        },
      ],
    };
  },
  methods: {
    async showMessageFromBackend() {
      try {
        const response = await this.$axios.get("/api/hello");
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
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
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  color: magenta;
}
</style>