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
      <div class="nav__right flex flex--align">
        <nuxt-link
          to="/creators"
          class="nav__link"
          v-if="auth&&user.creator.valid"
        >Dashhoard</nuxt-link>
        <button
          @click="$router.push('/creators/new')"
          style="margin-right:2rem;"
          class="button button--primary button--small button--very-round"
          v-if="auth&&!user.creator.valid"
        >Become A Creator</button>

        <nuxt-link
          tag="div"
          :to="auth?'/user':`/auth/login`"
        >
          <img
            v-if="!auth"
            :src="require('~/assets/img/profile.webp')"
            @error="handleError"
            class="avatar"
            height="35"
            width="35"
          />
          <img
            v-else
            :src="user.avatar"
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
  data: () => ({
    creator_form: false,
  }),
  methods: {
    handleError() {},
  },
};
</script>
<style lang="scss" >
.nav {
  &__link {
    margin-right: 1rem;
    text-decoration: none;
  }
}
// @import "~/assets/style/component/desktop/nav";
</style>

