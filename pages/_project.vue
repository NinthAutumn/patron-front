<template>
  <div class="project-page">
    <div class="project-page__header"></div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  layout(ctx) {
    return ctx.isMobile ? "Mobile/project" : "DesktopNav";
  },
  async fetch() {
    await this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="scss">
</style>
