<template>
  <main>
    <NavBar>
      <template v-slot:nav-links>
        <div class="nav-links">
          <a href="#about-section">about</a>
          <a href="#experience-section">experience</a>
          <a href="#volunteer-section">volunteering</a>
          <a href="#education-section">education</a>
          <a href="#skills-section">skills</a>
          <a href="#projects-section">projects</a>
        </div>
        <a href="https://firebasestorage.googleapis.com/v0/b/portfolios-350309.appspot.com/o/makena_kong_resume_july_2023.pdf?alt=media&token=e72aa3b8-bfc0-449c-815f-41ef5b7bf5cf"
          class="icon-and-text" target="_blank" rel="noreferrer noopener">
          <font-awesome-icon :icon="['fas', 'print']" class="fa-1x" />resume</a>
      </template>
    </NavBar>

    <div class="content">
      <section id="about-section">
        <p class="name">makena kong</p>
        <p class="section-title">about me</p>
        <p>
          I’m a Full Stack Engineer that leans towards the front end side of
          things and a good eye for UI/UX design. I’m a quick prototyper and
          iterate fast.
        </p>
        <div class="about-section-icons">
          <a v-for="social in socials" :key="'social-' + social.id" :href="social.url" target="_blank"
            rel="noopener noreferer">
            <font-awesome-icon :icon="['fab', social.icon]" class="fa-1x" />
          </a>
          <span class="icon-and-text"><font-awesome-icon :icon="['fa', 'location-dot']" class="fa-1x" />
            san francisco, ca</span>
        </div>
      </section>

      <section id="experience-section">
        <p class="section-title">experience</p>
        <div v-for="update in updates.filter((update) => update.type === 'career')" :key="'update-' + update.id">
          <p class="update-title">{{ update.title }}</p>
          <ul v-if="update.subtitle" class="update-details">
            <li v-for="(subtitle, index) in update.subtitle.split('\\n')" :key="update.id + index">
              {{ subtitle }}
            </li>
          </ul>
        </div>
      </section>

      <section id="volunteer-section">
        <p class="section-title">volunteering</p>
        <div v-for="update in updates.filter(
            (update) => update.type === 'volunteer'
          )" :key="'update-' + update.id">
          <p class="update-title">{{ update.title }}</p>
        </div>
      </section>

      <section id="education-section">
        <p class="section-title">education</p>
        <p>California Polytechnic State University, San Luis Obispo</p>
        <p>California Institute of the Arts (online)</p>
      </section>

      <section id="skills-section">
        <p class="section-title">skills</p>
        <p class="update-title">web</p>
        <ul class="update-details">
          <li>react & next js</li>
          <li>vue & nuxt js</li>
          <li>ruby on rails</li>
        </ul>
        <p class="update-title">languages</p>
        <ul class="update-details">
          <li>js/ts</li>
          <li>html/css</li>
          <li>ruby</li>
          <li>python</li>
          <li>sql</li>
        </ul>
        <p class="update-title">cloud</p>
        <ul class="update-details">
          <li>aws</li>
          <li>gcp</li>
          <li>heroku</li>
          <li>python</li>
          <li>sql</li>
        </ul>
      </section>

      <section id="projects-section">
        <p class="section-title">projects</p>
        <div v-for="update in updates.filter(
            (update) => update.type === 'project'
          ) " :key="'update-' + update.id">
          <p class="update-title">
            <a :href="update.url" target="_blank" rel="noopener noreferer">{{
            update.title
          }}</a>
          </p>
          <p class="update-details">{{ update.subtitle }}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="~/assets/css/dev.css" lang="css" scoped></style>

<script lang="ts">
import Vue from "vue";
import ISocialLink from "~/models/socialLink";
import IDevUpdate from "~/models/devUpdate";
import SiteTypes from "~/models/siteTypes";

export default Vue.extend({
  name: "DevPage",
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
        this.updates = snapshot.val().sort((a: IDevUpdate, b: IDevUpdate) => b.sort - a.sort);
      });
    };

    getSocials();
    getUpdates();
  },
});
</script>
