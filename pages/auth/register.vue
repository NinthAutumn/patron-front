<template>
  <section
    id="register-page"
    class="container-padding"
  >
    <auth-register-card></auth-register-card>
  </section>
</template>

<script>
export default {
  async mounted() {
    this.$social.load();
  },
};
</script>

<style lang="scss">
</style>
