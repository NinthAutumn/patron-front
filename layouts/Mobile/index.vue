<template>
  <nav class="nav nav--mobile">
    <div class="nav__container">
      <div class="nav__menu">
        <div class="nav__item" v-for="item of list" :key="item.name">
          <nuxt-link
            tag="div"
            :to="item.link"
            v-if="item.icon"
            class="nav__icon"
          >
            <fa :icon="item.icon"></fa>
            <span>{{ item.name }}</span>
          </nuxt-link>
          <div class="nav__profile" @click="$router.push('/auth/login')" v-else>
            <img
              height="55"
              width="55"
              :src="item.img"
              @error="onError"
              class="nav__avatar"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script >
export default {
  data: () => ({
    list: [
      { name: "ホーム", icon: "home", link: "/" },
      { name: "投稿", icon: "comments", link: "/posts" },
      { name: "user", icon: "", img: require("~/assets/img/profile.webp") },
      { name: "検索", icon: "search", link: "/search" },
      { name: "通知", icon: "bell", link: "/notification" },
    ],
  }),
  created() {
    let nav = "user";
    if (this.$store.getters["auth/isAuth"]) {
      nav = this.$store.getters["user/getSetting"].navigation;
    }
    if (nav !== "user") {
      this.list = [
        { name: "ホーム", icon: "home", link: "/" },
        { name: "投稿", icon: "comments", link: "/posts" },
        { name: "user", icon: "", img: require("~/assets/img/profile.png") },
        { name: "ページ", icon: "comments", link: "/creator" },
        { name: "通知", icon: "bell", link: "/notification" },
      ];
    }
  },
};
</script>

<style lang="scss">
// @import "~/assets/style/component/mobile/nav";
</style>
