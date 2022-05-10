<template>
  <main>
    <div class="section-nav">
      <ArtLogo />
      <ul class="section-nav__collections">
        <li
          v-for="collection in collections"
          :key="collection - 'collection.id'"
        >
          <button>
            {{ collection.label }} <span>{{ collection.count }}</span>
          </button>
        </li>
      </ul>
      <div class="section-nav__about">
        <button>about me</button>
      </div>
    </div>
    <div class="section-content">
      <div class="section-content__section">collection one stuff</div>
      <div class="section-content__section">collection two</div>
      <div class="section-content__section">collection three</div>
      <div class="section-content__section">
        about me stuff
        <div class="section-content__icons">
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
    </div>
  </main>
</template>

<style scoped>
main{
  width: 100%
}
.section-nav {
  padding: var(--space-1);
  display: inline-block;
  vertical-align: top;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: aqua;
}

.section-nav__collections {
  list-style: none;
  padding-left: 0;
}

.section-nav__collections span {
  font-size: var(--xxs);
  padding: 0.25rem;
  vertical-align: top;
}

.section-content {
  padding: var(--space-6);
  display: inline-block;
  text-align: center;
  flex-grow: 1;
  background-color: pink;
}

.section-content__section {
  height: 60vh
}

.section-content__icons {
  margin-left: 2rem;
}
.section-content__icons a {
  color: var(--purple);
  font-weight: 800;
  margin-left: 1rem;
  text-decoration: none;
}

.section-content__icons a:hover {
  color: var(--black);
}

button {
  border: none;
  color: var(--black);
  background-color: transparent;
  cursor: pointer;
  font-size: var(--lg);
  font-family: var(--title);
  font-weight: 600;
}

button:hover {
  color: var(--purple);
}
</style>

<script lang="ts">
import Vue from "vue";
import ISocialLink from "~/api/models/socialLink";
import ArtLogo from "~/assets/logos/logo_art.svg?inline";

export default Vue.extend({
  name: "ArtPage",
  components: { ArtLogo },
  data: () => ({
    socials: [] as ISocialLink[],
    collections: [
      {
        id: "collection_1",
        label: "collection 1",
        count: 3,
      },
      {
        id: "collectionss_2",
        label: "collectionss 2",
        count: 6,
      },
      {
        id: "three",
        label: "three",
        count: 2,
      },
    ],
  }),
  created() {
    this.$axios
      .get("/api/socials?art=true")
      .then((res: any) => this.setSocials(res));
  },
  methods: {
    setSocials(response: any) {
      this.socials = response.data;
    },
  },
});
</script>