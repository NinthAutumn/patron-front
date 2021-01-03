<template>
  <div>
    <nav class="project-nav">
      <div class="project-nav__header">
        <fa icon="arrow-left" @click="$router.push('/')"></fa>
      </div>
    </nav>
    <nav class="nav nav--mobile">
      <div class="nav__container">
        <div class="nav__menu">
          <div class="nav__item--creator" v-for="item of list" :key="item.name">
            <nuxt-link
              tag="div"
              :to="item.link"
              v-if="item.icon"
              class="nav__icon"
            >
              <fa :icon="item.icon"></fa>
              <span>{{ item.name }}</span>
            </nuxt-link>
            <div v-else class="nav__creator">
              <img
                height="30"
                width="30"
                :src="auth ? user.avatar : item.img"
                @error="onError"
                class="nav__avatar--small"
              />
              <div class="nav__username">
                {{ user.username || "ユーザー名" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [
        { name: "user", icon: "", img: require("~/assets/img/profile.webp") },
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
  &__header {
    font-size: 1.4rem;
  }
  position: fixed;
  top: 5px;
  left: 5px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  // width: 100%;
  @include themify($themes) {
    box-shadow: themed("boxShadow");
  }
  border-radius: 100px;
  // justify-content: center;
  padding: 0 1rem;
}
</style>
