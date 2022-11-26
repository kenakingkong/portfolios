<template>
  <nav class="nav">
    <Logo />
    <slot name="nav-links"></slot>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>