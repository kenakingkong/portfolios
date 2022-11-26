<template>
  <main>
    <NavBar>
      <template v-slot:nav-links>
        <NavLinks />
      </template>
    </NavBar>
    <div class="section-content" ref="content" @mouseenter="reanimate">
      <!--<p>hi, i'm makena kong</p>-->
      <p>m</p>
      <p>a</p>
      <p>k</p>
      <p>e</p>
      <p>n</p>
      <p>a</p>
      <br />
      <p>k</p>
      <p>o</p>
      <p>n</p>
      <p>g</p>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    animation: null as GSAPTimeline | null,
  }),
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
  mounted() {
    if (!this.$refs.content) return;

    const duration = 1;
    const stagger = 0.1;
    const q = gsap.utils.selector(this.$refs.content);

    const animation1 = gsap.to(q("p"), {
      duration: duration / 4,
      stagger: stagger,
      ease: "Power2.easeOut",
      y: -25,
      scale: 1.1,
    });

    const animation2 = gsap.to(q("p"), {
      duration: duration / 2,
      stagger: stagger,
      ease: "Bounce.easeOut",
      y: 0,
      scale: 1,
    });

    this.animation = gsap
      .timeline()
      .add(animation1)
      .add(animation2, duration / 4)
      .play();
  },
  beforeDestroy() {
    if (this.animation) this.animation.kill();
  },
  methods: {
    reanimate() {
      if (this.animation) this.animation.restart();
    },
  },
});
</script>

<style scoped>
main {
  padding: var(--space-1);
  background-color: #c5b4e3;
  height: 100vh;
}

.section-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

p {
  margin: var(--space-y-2);
  font-size: var(--xxl);
  font-weight: 900;
  letter-spacing: -0.5rem;
  line-height: 50%;
  display: inline-block;
}
</style>