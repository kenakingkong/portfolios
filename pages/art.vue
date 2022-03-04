<template>
<main>
  <div class="section-nav">
    <ArtLogo />
    <div class="section-nav__icons">
      <a
        v-for="social in socials"
        :key="social - 'social.icon'"
        :href="social.url"
        target="_blank"
        rel="noopener noreferer"
      >
        <font-awesome-icon :icon="['fab', social.icon]" class="fa-1x" />
        {{ social.name }}
      </a>
    </div>
  </div>
</main>
</template>

<style scoped>
.section-nav {
  padding: var(--space-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-nav__icons {
  margin-left: 2rem;
}
.section-nav__icons a {
  color: var(--purple);
  font-weight: 800;
  margin-left: 1rem;
  text-decoration: none;
}

.section-nav__icons a:hover {
  color: var(--black);
}
</style>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/api/models/socialLink'
import ArtLogo from '~/assets/logos/logo_art.svg?inline'

export default Vue.extend({
  name: 'ArtPage',
  components: { ArtLogo },
  data: () => ({
    socials: [] as SocialLink[],
  }),
  created() {
    this.$axios.get('/api/socials?art=true').then((res: any) => this.setSocials(res))
  },
  methods: {
    setSocials(response: any) {
      this.socials = response.data;
    }
  }
})
</script>