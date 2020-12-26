<template>
  <section class="container">
    <component :is="pageInstance" />
  </section>
</template>

<script >
// import { ButtonSize } from '~/models/definitions'

export default {
  components: {
    // DialogCard: () => import('@/components/Utility/Dialog')
  },
  computed: {
    pageInstance() {
      return () =>
        import(
          `~/components/Page/${this.$device.isMobile ? "Mobile/" : ""}Home.vue`
        );
    },
  },
};
</script>

<style>
</style>
