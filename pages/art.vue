<template>
  <main>
    <!-- TOP NAV -->
    <nav class="section-nav__logo">
      <LogoArt />
    </nav>
    <nav class="section-nav__about-me">
      <button>about me</button>
    </nav>

    <!-- BOTTOM NAV -->
    <nav class="section-nav__collections">
      <ul>
        <li
          v-for="collection in collections"
          :key="'collection-' + collection.id"
        >
          <button
            @click="changeCollection(collection.id)"
            :class="activeCollection === collection.id ? 'active' : ''"
          >
            {{ collection.label }} <span>{{ collection.count }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- GALLERY -->
    <div
      class="section-gallery"
      ref="gallery"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
      :style="
        'height: ' +
        Math.round(totalPieces / 4) * 250 +
        'px;' +
        'width: ' +
        Math.round(totalPieces / 2) * 250 +
        'px;'
      "
    >
      <div v-for="piece in pieces" :key="'piece-'+piece.id" class="piece">
        <img
          :src="piece.url"
          :alt="piece.title"
          :style="
            'margin-left: ' +
            Math.floor(Math.random() * 8) +
            'rem; ' +
            'margin-right: ' +
            Math.floor(Math.random() * 8) +
            'rem; ' +
            'margin-top: ' +
            Math.floor(Math.random() * 8) +
            'rem; ' +
            'margin-bottom: ' +
            Math.floor(Math.random() * 8) +
            'rem; '
          "
        />
      </div>
    </div>
    <!--
      <h2>
      i'm makena kong and i ...
      <ul>
        <li>paint dog portraits</li>
        <li>crochet things</li>
        <li>occassionally sew clothes</li>
        <li>try to refurbish furniture</li>
        <li>woodwork (barely)</li>
        <li>paint on things</li>
        <li>try to be a graphic designer</li>
      </ul>
    </h2>
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
    -->
  </main>
</template>

<style src="~/public/css/art.css" lang="css" scoped></style>

<script lang="ts">
import Vue from "vue";
import ISocialLink from "~/models/socialLink";
import IArtPiece from "~/models/artPiece";
import IArtCollection from "~/models/artCollection";
import LogoArt from "~/components/LogoArt.vue";
import SiteTypes from "~/models/siteTypes";

export default Vue.extend({
  name: "ArtPage",
  components: { LogoArt },
  head() {
    return {
      title: "makena's art <3",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "i'm makena kong and this is my art",
        },
      ],
    };
  },
  data() {
    return {
      galleryPosition: { top: 0, left: 0, x: 0, y: 0 },
      socials: [] as ISocialLink[],
      totalPieces: 0 as Number,
      activeCollection: null as String | null,
      collections: [] as IArtCollection[],
      pieces: [] as IArtPiece[],
    };
  },
  created() {
    const getSocials = () => {
      const dbSocials = this.$fire.database.ref("socialLinks");
      dbSocials.get().then((snapshot: any) => {
        this.socials = snapshot
          .val()
          .filter((x: ISocialLink) => x.type === SiteTypes.art);
      });
    };

    const getPieces = () => {
      const dbUpdates = this.$fire.database.ref("artPieces");
      dbUpdates.get().then((snapshot: any) => {
        this.pieces = snapshot.val();
        this.totalPieces = snapshot.val().length;
      });
    };

    const getCollections = () => {
      const dbUpdates = this.$fire.database.ref("artCollections");
      dbUpdates.get().then((snapshot: any) => {
        this.collections = snapshot.val();
      });
    };

    getSocials();
    getPieces();
    getCollections();
  },
  methods: {
    changeCollection(collectionId: string) {
      this.activeCollection = collectionId;
    },
    handleMouseDown(event: MouseEvent) {
      if (!this.$refs.gallery) return;
      const ref = this.$refs.gallery as HTMLDivElement;

      console.log("mouse down");

      ref.style.cursor = "grabbing";
      ref.style.userSelect = "none";

      // get current position
      this.galleryPosition = {
        // The current scroll
        left: ref.scrollLeft,
        top: ref.scrollTop,

        // Get the current mouse position
        x: event.clientX,
        y: event.clientY,
      };
      console.log(this.galleryPosition);
    },
    handleMouseUp(event: MouseEvent) {
      if (!this.$refs.gallery) return;
      const ref = this.$refs.gallery as HTMLDivElement;

      console.log("mouse up");

      ref.style.cursor = "grab";
      ref.style.removeProperty("user-select");
    },
    handleMouseMove(event: MouseEvent) {
      if (!this.$refs.gallery) return;
      const ref = this.$refs.gallery as HTMLDivElement;

      console.log("mouse move");

      // How far the mouse has been moved
      const dx = event.clientX - this.galleryPosition.x;
      const dy = event.clientY - this.galleryPosition.y;

      // Scroll the element
      ref.scrollTop = this.galleryPosition.top - dy;
      ref.scrollLeft = this.galleryPosition.left - dx;
    },
  },
});
</script>