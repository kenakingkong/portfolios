export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolios',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    "@nuxtjs/svg",
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // api
  serverMiddleware: [
    '~/api'
  ],

  // auth
  auth: {
    strategies: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_SECRET_KEY
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    }
  },

  // icons
  fontawesome: {
    icons: {
      solid: [ 'faLocationDot', 'faUpRightFromSquare', 'faSitemap', 'faHandHoldingHeart', 'faFileCode'],
      brands: [ 'faLinkedin', 'faGithub', 'faMedium', 'faInstagram']
    },
  },

  // fonts
  googleFonts: {
    families: {
      'Playfair+Display': true,
      'Open+Sans': true,
    }
  },
}