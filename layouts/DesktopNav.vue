<template>
  <div class="body-theme">
    <desktop></desktop>
    <nuxt />
  </div>
</template>
<script>
import Desktop from "@/layouts/Desktop";
export default {
  head() {
    return {
      htmlAttrs: {
        class: `theme-default`,
      },
      link: [],
    };
  },
  components: {
    Desktop,
  },
};
</script>
<style>
</style>
