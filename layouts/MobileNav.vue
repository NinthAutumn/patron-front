<template>
  <div class="body-theme">
    <mobile-nav></mobile-nav>
    <nuxt />
  </div>
</template>
<script>
import MobileNav from "@/layouts/Mobile";
export default {
  head() {
    return {
      htmlAttrs: {
        class: `theme-default`,
      },
    };
  },
  components: {
    MobileNav,
  },
};
</script>
<style>
</style>
