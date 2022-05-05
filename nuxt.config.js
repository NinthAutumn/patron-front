export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "オンジン",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    script: [{ src: "https://js.stripe.com/v3" }],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/style/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/style",
    "~/plugins/layout",
    "~/plugins/intercept",
    "~/plugins/cropper",
    "~/plugins/paypal",
    "~/plugins/paypal-sub",
    "~/plugins/stripe",
    "~/plugins/click",
    "~/plugins/auth",
    { src: "~/plugins/social", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/date-fns"],

  dateFns: {
    locales: ["es", "ru", "ja"],
    defaultLocale: "en-US",
    format: "yyyy-MM-dd",
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/i18n",
    [
      "@nuxt/http",
      {
        proxy: true,
        retry: {
          statusCodes: [401],
          limit: 2,
        },
      },
    ],
    "@nuxtjs/style-resources",
    "@nuxtjs/device",

    "nuxt-webfontloader",
    [
      "@nuxtjs/toast",
      {
        singleton: true,
      },
    ],
    "@nuxtjs/universal-storage",
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: [
              "faSyncAlt",
              "faBookmark",
              "faThumbsUp",
              "faComment",
              "faCommentAlt",
              "faSortNumericDown",
              "faLayerGroup",
              "faGift",
              "faAngleUp",
              "faAngleLeft",
              "faAngleDown",
              "faAngleRight",
              "faBolt",
              "faFlag",
              "faEnvelope",
              "faList",
              "faCog",
              "faFile",
              "faListUl",
              "faComments",
              "faLock",
              "faUnlock",
              "faScroll",
              "faEye",
              "faCube",
              "faCrown",
              "faSearch",
              "faGlobe",
              "faBook",
              "faBell",
              "faSignOutAlt",
              "faUser",
              "faBookOpen",
              "faCoins",
              "faChartPie",
              "faMap",
              "faEllipsisV",
              "faHome",
              "faFire",
              "faChevronLeft",
              "faChevronRight",
              "faChevronUp",
              "faChevronDown",
              "faImage",
              "faMugHot",
              "faEdit",
              "faCheck",
              "faSort",
              "faAddressCard",
              "faShare",
              "faCalendar",
              "faCaretDown",
              "faQuestionCircle",
              "faArrowLeft",
              "faArrowRight",
              "faBars",
              "faFeatherAlt",
              "faCaretRight",
              "faPen",
              "faPlay",
              "faSortNumericDownAlt",
              "faNewspaper",
              "faLocationArrow",
              "faTimes",
              "faThLarge",
              "faPlus",
              "faMinus",
              "faTint",
              "faCreditCard",
              "faPenNib",
              "faSlidersH",
              "faThList",
              "faStream",
              "faHeart",
              "faGifts",
              "faShoppingCart",
              "faInfoCircle",
            ],
          },
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ["faBookmark", "faHeart"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faGoogle",
              "faFacebook",
              "faCcStripe",
              "faCcPaypal",
              "faTwitter",
              "faPaypal",
              "faStripeS",
              "faDiscord",
              "faPatreon",
              "faLine",
              "faInstagram",
              "faReddit",
            ],
          },
        ],
      },
    ],
    "@nuxtjs/pwa",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.js",
      },
      {
        code: "ja",
        file: "ja-JP.js",
      },
    ],
    lazy: true,
    langDir: "~/lang/",
    defaultLocale: "en",
  },
  proxy: {
    "/v1/": {
      target: "http://localhost:5000/",
      pathRewrite: {
        "^/v1/": "/",
      },
    },
    "/file": {
      target: process.env.S3_URL,
      pathRewrite: {
        "^/file": "/",
      },
    },
  },
  webfontloader: {
    google: {
      families: ["Noto Sans JP:500&display=swap"], //Loads Lato font with weights 400 and 700
    },
  },
  styleResources: {
    scss: [
      "~/assets/style/abstract/_variables.scss",
      "~/assets/style/abstract/_functions.scss",
    ],
  },
  build: {
    // extractCSS: true,
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true,
    },
    preset: {
      // postcss-preset-env 設定を変更します
      autoprefixer: {
        grid: true,
        flexbox: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
};
