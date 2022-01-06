<template>
<div class="marquee">
  <div class="marquee__inner" aria-hidden="true">
    <span>{{text}}</span>
    <span>{{text}}</span>
    <span>{{text}}</span>
    <span>{{text}}</span>
  </div>
</div>
</template>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  animation-play-state: running;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 5s linear infinite;
  animation-play-state: running;
}

.marquee span {
  font-size: 10vw;
  padding: 0 2vw;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
      transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
      transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>

<script lang="ts">
export default {
  name: 'SharedMarquee',
  props: { 
    text: {
      type: String,
      required: true
    }
  }
 }
</script>