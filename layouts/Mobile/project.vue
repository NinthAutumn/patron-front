<template>
  <div>
    <nav class="project-nav">
      <div class="project-nav__header">
        <fa icon="times" @click="$router.push('/')"></fa>
      </div>
      <nuxt-link :to="'/' + $route.params.project" class="project-nav__home">
        <img
          height="35"
          width="35"
          :src="auth ? user.avatar : defaultProfile"
          alt=""
        />
      </nuxt-link>
    </nav>
    <nuxt />
    <nav class="nav nav--mobile">
      <div class="nav__container" style="padding: 0 2rem">
        <div class="nav__menu">
          <div class="nav__item--creator" v-for="item of list" :key="item.name">
            <nuxt-link tag="div" :to="item.link" class="nav__icon">
              <fa :icon="item.icon"></fa>
              <span>{{ item.name }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      defaultProfile: require("~/assets/img/profile.webp"),
      list: [
        {
          name: "ホーム",
          icon: "home",
          link: `/${this.$route.params.project}`,
        },
        {
          name: "サブスク",
          icon: "fire",
          link: `/${this.$route.params.project}/plans`,
        },
        {
          name: "投げ銭",
          icon: "gifts",
          link: `/${this.$route.params.project}/donate`,
        },
        {
          name: "ショップ",
          icon: "shopping-cart",
          link: `/${this.$route.params.project}/shop`,
        },
        {
          name: "投稿",
          icon: "comments",
          link: `/${this.$route.params.project}/posts`,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
      auth: "auth/isAuth",
    }),
  },
  methods: {
    onError() {},
  },
  head() {
    return {
      htmlAttrs: {
        class: `theme-default`,
      },
    };
  },
};
</script>

<style lang="scss">
.project-nav {
  z-index: 1;

  &__header {
    font-size: 1.4rem;
    z-index: inherit;
    position: fixed;
    top: 5px;
    left: 5px;
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 100%;
    @include themify($themes) {
      box-shadow: themed("boxShadow");
      background: white;
    }
    border-radius: 100px;
  }
  &__home.nuxt-link-exact-active {
    color: $primary !important;
  }
  &__home {
    font-size: 1.4rem;
    position: absolute;
    top: 5px;
    right: 5px;
    height: 3.5rem;
    width: 3.5rem;
    img {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 100rem;
    }
    // padding: 0 1rem;
    z-index: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-decoration: none;
    @include themify($themes) {
      box-shadow: themed("boxShadow");
      background: white;
    }
    color: black !important;
    // font-weight: bold;
  }

  //
  // padding: 0 1rem;
}
</style>
