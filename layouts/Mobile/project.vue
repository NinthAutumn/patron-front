<template>
  <div>
    <nav class="project-nav">
      <div class="project-nav__header flex flex--between flex--align">
        <div class="project-nav__close">
          <fa
            icon="times"
            @click="$router.push('/')"
          ></fa>
        </div>

        <nuxt-link
          :to="auth?'/user':'/auth/login'"
          class="project-nav__home"
        >
          <img
            height="35"
            width="35"
            :src="auth ? user.avatar : defaultProfile"
            alt
          />
        </nuxt-link>
      </div>
    </nav>
    <nuxt />
    <nav class="nav nav--mobile">
      <div
        class="nav__container"
        style="padding: 0 2rem"
      >
        <div class="nav__menu">
          <div
            class="nav__item--creator"
            v-for="item of list"
            :key="item.name"
          >
            <nuxt-link
              tag="div"
              :to="item.link"
              class="nav__icon"
            >
              <fa :icon="item.icon"></fa>
              <!-- <span>{{ item.name }}</span> -->
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
          name: "Home",
          icon: "home",
          link: `/${this.$route.params.project}`,
        },
        {
          name: "Subscription",
          icon: "fire",
          link: `/${this.$route.params.project}/plans`,
        },
        {
          name: "Tip",
          icon: "gifts",
          link: `/${this.$route.params.project}/donate`,
        },
        {
          name: "ショップ",
          icon: "shopping-cart",
          link: `/${this.$route.params.project}/shop`,
        },
        {
          name: "Posts",
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
  z-index: 3;
  &__close {
    @include themify($themes) {
      box-shadow: themed("boxShadow");
      background: white;
    }
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
  }
  &__header {
    font-size: 1.4rem;
    z-index: inherit;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
  }
  &__home.nuxt-link-exact-active {
    color: $primary !important;
  }
  &__home {
    font-size: 1.4rem;

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
