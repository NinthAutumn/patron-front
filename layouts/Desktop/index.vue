<template>
  <nav class="nav nav--desktop">
    <div class="nav__container">
      <div class="nav__left">
        <nuxt-link
          to="/"
          tag="div"
          class="logo"
        >Onjin</nuxt-link>
      </div>
      <div class="nav__right">
        <nuxt-link
          tag="div"
          to="/auth/login"
        >
          <img
            v-if="!auth"
            :src="require('~/assets/img/profile.webp')"
            @error="handleError"
            class="avatar"
            height="35"
            width="35"
          />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      auth: "auth/isAuth",
      user: "auth/getAuth",
    }),
  },
  methods: {
    handleError() {},
  },
};
</script>
<style lang="scss" >
// @import "~/assets/style/component/desktop/nav";
</style>

