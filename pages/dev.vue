<template>
  <main>
    <LogoDev class="logo" />
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
            :key="'social-' + social.id"
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
          <li v-for="update in updates" :key="'update-' + update.id">
            <a :href="update.url" target="_blank" rel="noopener noreferer">
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

<style src="~/public/css/dev.css" lang="css" scoped/>

<script lang="ts">
import Vue from "vue";
import ISocialLink from "~/models/socialLink";
import IDevUpdate from "~/models/devUpdate";
import LogoDev from "~/components/LogoDev.vue";
import SiteTypes from "~/models/siteTypes";

export default Vue.extend({
  name: "DevPage",
  components: { LogoDev },
  head() {
    return {
      title: "makena's dev <3",
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
  data: () => ({
    socials: [] as ISocialLink[],
    updates: [] as IDevUpdate[],
  }),
  created() {
    const getSocials = () => {
      const dbSocials = this.$fire.database.ref("socialLinks");
      dbSocials.get().then((snapshot) => {
        this.socials = snapshot
          .val()
          .filter((x: ISocialLink) => x.type === SiteTypes.dev);
      });
    };

    const getUpdates = () => {
      const dbUpdates = this.$fire.database.ref("devUpdates");
      dbUpdates.get().then((snapshot) => {
        this.updates = snapshot.val();
      });
    };

    getSocials();
    getUpdates();
  },
});
</script>
