<template>
  <main>
    <nav class="nav">
      <Logo />
    </nav>
    <section class="page">
      <Design />
    </section>

    <section class="page">more!!!</section>

    <section class="page">more!!!</section>

    <section class="page">end!!!</section>
  </main>
</template>

<style src="~/assets/css/design.css" lang="css" scoped></style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DesignPage",
  head() {
    return {
      title: "makena's designs <3",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "i'm makena kong - a full stack engineer based in san francisco",
        },
      ],
    };
  },
});
</script>