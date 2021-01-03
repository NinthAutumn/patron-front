export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'オンジン',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/style/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/style',
    '~/plugins/layout',
    '~/plugins/intercept',
    '~/plugins/cropper',
    '~/plugins/paypal',
    '~/plugins/paypal-sub',
    '~/plugins/stripe'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxt/http', {
      proxy: true
    }],
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    'nuxt-webfontloader',
    ['@nuxtjs/toast', {
      singleton: true
    }],
    "@nuxtjs/universal-storage",
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faSyncAlt',
              'faBookmark',
              'faThumbsUp',
              'faComment',
              'faCommentAlt',
              'faSortNumericDown',
              'faLayerGroup',
              'faGift',
              'faAngleUp',
              'faAngleLeft',
              'faAngleDown',
              'faAngleRight',
              'faBolt',
              'faFlag',
              'faEnvelope',
              'faList',
              'faCog',
              'faListUl',
              'faComments',
              'faLock',
              'faUnlock',
              'faScroll',
              'faEye',
              'faCube',
              'faCrown',
              'faSearch',
              'faGlobe',
              'faBook',
              'faBell',
              'faSignOutAlt',
              'faUser',
              'faBookOpen',
              'faCoins',
              'faChartPie',
              'faMap',
              'faEllipsisV',
              'faHome',
              'faFire',
              'faChevronLeft',
              'faChevronRight',
              'faChevronUp',
              'faChevronDown',
              'faImage',
              'faMugHot',
              'faEdit',
              'faCheck',
              'faRainbow',
              'faThumbsDown',
              'faSort',
              'faVenusMars',
              'faAddressCard',
              'faCalendar',
              'faCaretDown',
              'faQuestionCircle',
              'faArrowLeft',
              'faArrowRight',
              'faBars',
              'faFeatherAlt',
              'faCaretRight',
              'faPen',
              'faPlay',
              'faSortNumericDownAlt',
              'faNewspaper',
              'faLocationArrow',
              'faTimes',
              'faThLarge',
              'faPlus',
              'faMinus',
              'faTint',
              'faCreditCard',
              'faPenNib',
              'faSlidersH',
              'faThList',
              'faStream',
              'faGifts',
              'faShoppingCart'
            ]
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faBookmark', 'faHeart']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: [
              'faGoogle',
              'faFacebook',
              'faCcStripe',
              'faCcPaypal',
              'faTwitter',
              'faPaypal',
              'faStripeS',
              'faDiscord',
              'faPatreon',
              "faLine"
            ]
          }
        ]
      },

    ],
    '@nuxtjs/pwa',
  ],
  proxy: {
    "/v1/": {
      target: "http://localhost:5000/",
      pathRewrite: {
        '^/v1/': '/'
      },

    }
  },
  webfontloader: {
    google: {
      families: ['Noto Sans JP:500&display=swap'] //Loads Lato font with weights 400 and 700
    }
  },
  styleResources: {
    scss: ['~/assets/style/abstract/_variables.scss', '~/assets/style/abstract/_functions.scss']
  },
  build: {
    // extractCSS: true,
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    preset: {
      // postcss-preset-env 設定を変更します
      autoprefixer: {
        grid: true,
        flexbox: true
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 8080
  }
}
