<template>
  <div class="page page-container">
    <div class="container-padding">
      <user-main-card :user="user"></user-main-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // layout(ctx) {
  //   // return ctx.isMobile ? "MobileNav" : "DesktopNav";
  // },
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
    }),
  },
};
</script>

<style lang="scss">
</style>
