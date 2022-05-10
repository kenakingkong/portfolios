<template>
  <main>
    <DevLogo class="logo" />
    <div class="container">
      <div class="left-section">
        <div class="section-name">
          <h2>makena kong</h2>
        </div>
        <div class="section-info">
          <h1>full stack engineer</h1>
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
            <font-awesome-icon :icon="['fab', social.icon]" class="fa-1x" />
          </a>
        </div>
      </div>
      
      <div class="right-section">
        <h3>what i've been up to</h3>
        <ul class="section-updates">
          <li v-for="update in updates" :key="update - 'update.id'">  
            <a
              :href="update.url"
              target="_blank"
              rel="noopener noreferer"
            >
              <font-awesome-icon :icon="['fas', update.icon]" class="fa-1x" />
              <div class="section-updates__content">
                <p class="section-updates__title">{{ update.title }}</p>
                <p class="section-updates__subtitle">{{ update.subtitle }}</p>
                <p class="section-updates__date">{{ update.date }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style src="../assets/css/dev.css" lang="css" scoped/>

<script lang="ts">
import Vue from 'vue'
import ISocialLink from '~/models/socialLink'
import IUpdate from '~/models/update'
import DevLogo from "~/assets/logos/logo_dev.svg?inline"

export default Vue.extend({
  name: 'DevPage',
  components: {
    DevLogo,
  },
  data: () => ({
    socials: [] as ISocialLink[],
    updates: [] as IUpdate[]
  }),
  created() {
    this.$axios.get('/api/socials?dev=true').then((res: any) => this.setSocials(res))
    this.$axios.get('/api/updates').then((res: any) => this.setUpdates(res))
  },
  methods: {
    setSocials(response: any) {
      this.socials = response.data;
    },
    setUpdates(response: any) {
      this.updates = response.data
    }
  }
})
</script>
