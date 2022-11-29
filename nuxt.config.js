export default {
  head: {
    title: "makena <3",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Nuxt Generate
  target: "static",
  generate: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
    "@nuxtjs/svg",
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/style-resources", "@nuxtjs/firebase"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // icons
  fontawesome: {
    icons: {
      solid: [
        "faLocationDot",
        "faUpRightFromSquare",
        "faSitemap",
        "faHandHoldingHeart",
        "faFileCode",
        "faCode",
        "faPaintbrush",
        "faPrint",
        "faFile",
        "faChevronLeft"
      ],
      brands: ["faLinkedin", "faGithub", "faMedium", "faInstagram"],
    },
  },

  // fonts
  googleFonts: {
    families: {
      "Playfair+Display": true,
      "Epilogue": true,
      "Open+Sans": true,
      "Space+Grotesk": true,
    },
  },

  // firebase
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    services: {
      database: true,
      analytics: true,
    },
    onFirebaseHosting: true,
    terminateDatabasesAfterGenerate: true,
  },
};
