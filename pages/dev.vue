<template>
  <main>
    <DevLogo class="logo" />
    <div class="section-name">
      <h2>makena kong</h2>
      <p>she/they</p>
    </div>
    <div class="section-info">
      <h1>full stack engineer</h1>
      <h2>& web designer</h2>
    </div>
    <div class="section-location">
      <font-awesome-icon :icon="['fa', 'location-dot']" class="fa-1x" />
      san francisco, ca
    </div>
    <div class="section-icons">
      <a
        v-for="social in socials"
        :key="social - 'social.icon'"
        :href="social.url"
        target="_blank"
        rel="noopener noreferer"
      >
        <font-awesome-icon :icon="['fab', social.icon]" class="fa-2x" />
      </a>
    </div>
    <div class="section-updates">
      <ul>
        <li v-for="update in updates" :key="update - 'update.id'">
          <p class="section-updates__title">{{ update.title }}</p>
          <p class="section-updates__description">{{ update.description }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: var(--black);
  color: var(--white);
  padding: var(--space-1);
  min-height: 100vh;
}

div {
  margin: var(--space-y-2);
}

.section-name h2 {
  font-size: var(--lg);
}

.section-name p {
  font-size: var(--sm);
  font-weight: 600;
}

.section-info {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-info h1 {
  font-size: var(--xl);
  line-height: 100%;
}

.section-info h2 {
  font-size: var(--md);
}

.section-location {
  font-size: var(--md);
  display: flex;
  gap: 1rem;
  align-items: center;
}

.section-icons {
  display: flex;
  gap: 2rem;
}

.section-icons a {
  color: var(--white);
  margin: var(--space-y-1);
}

.section-icons a:hover {
  color: magenta;
}

.section-updates li {
  margin: var(--space-y-1);
}

.section-updates__title {
  font-size: var(--md);
}

.section-updates__description {
  font-size: var(--sm);
}
</style>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/api/models/socialLink'
import DevLogo from '~/assets/logos/logo_dev.svg?inline'

export default Vue.extend({
  name: 'DevPage',
  components: {
    DevLogo,
  },
  data: () => ({
    socials: [] as SocialLink[],
    updates: [
      {
        id: 1,
        title: 'This is the first thing that I have done',
        description: 'This is a description of the thing that I have done',
        liveURL: 'https://www.makenakong.com/',
        codeURL: 'https://github.com/kenakingkong',
      },
      {
        id: 2,
        title: 'This is the second thing that I have done so far',
        description: 'This is a description of the second thing that I have done so far',
        liveURL: 'https://www.makenakong.com/',
        codeURL: 'https://github.com/kenakingkong',
      },
    ],
    articles: [],
  }),
  created() {
    this.$axios.get('/api/socials?dev=true').then((res: any) => this.setSocials(res))
  },
  methods: {
    setSocials(response: any) {
      this.socials = response.data;
    }
  }
})
</script>
