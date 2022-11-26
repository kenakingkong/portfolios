<template>
  <main>
    <div class="section-nav">
      <NavBar>
        <template v-slot:nav-links>
          <div class="nav__links">
            <a
              v-for="social in socials"
              :key="'social-' + social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferer"
            >
              <font-awesome-icon :icon="['fab', social.icon]" class="fa-1x" />
              {{ social.name }}
            </a>
          </div>
        </template>
      </NavBar>
    </div>

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
    <canvas
      id="canvas"
      :width="this.canvasDimensions.width"
      :height="this.canvasDimensions.height"
    ></canvas>
  </main>
</template>

<style src="~/assets/css/art.css" lang="css" scoped></style>
<style>
#canvas {
  background-image: url("~assets/images/grid.png");
  background-repeat: repeat;
  overflow: auto;
}
</style>

<script lang="ts">
import Vue from "vue";
import ISocialLink from "~/models/socialLink";
import IArtPiece from "~/models/artPiece";
import IArtCollection from "~/models/artCollection";
import SiteTypes from "~/models/siteTypes";

export default Vue.extend({
  name: "ArtPage",
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
  data: () => ({
    socials: [] as ISocialLink[],
    totalPieces: 0 as Number,
    activeCollection: null as String | null,
    collections: [] as IArtCollection[],
    pieces: [] as IArtPiece[],
    vueCanvas: null as CanvasRenderingContext2D | null,
    canvasDimensions: { width: 2400, height: 1400 },
  }),
  mounted() {
    let c = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = c.getContext("2d") as CanvasRenderingContext2D;
    this.vueCanvas = ctx;
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
  updated() {
    // clear canvas
    if (!this.vueCanvas) return;
    this.vueCanvas.clearRect(
      0,
      0,
      this.canvasDimensions.width,
      this.canvasDimensions.height
    );

    // random squares
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(() => {
      this.drawRect();
    });

    this.pieces
      .filter(
        (piece) =>
          !this.activeCollection || piece.collection === this.activeCollection
      )
      .forEach((piece: IArtPiece) => {
        this.drawImg(piece.url);
      });
  },
  methods: {
    getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    },
    changeCollection(collectionId: string) {
      this.activeCollection = collectionId;
    },
    drawImg(src: string) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        if (!this.vueCanvas) return;
        this.vueCanvas.drawImage(
          image,
          this.getRandomInt(this.canvasDimensions.width - 200),
          this.getRandomInt(this.canvasDimensions.height - 200),
          image.width / 12,
          image.height / 12
        );
      };
    },
    drawRect() {
      if (!this.vueCanvas) return;

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(
        this.getRandomInt(this.canvasDimensions.width),
        this.getRandomInt(this.canvasDimensions.height),
        this.getRandomInt(600),
        this.getRandomInt(600)
      );
      this.vueCanvas.fillStyle = "#7cce2b";
      this.vueCanvas.stroke();
    },
  },
});
</script>