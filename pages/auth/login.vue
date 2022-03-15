<template>
  <section
    id="login-page"
    class="container-padding"
  >
    <auth-login-card></auth-login-card>
  </section>
</template>

<script >
export default {
  components: {},
  async mounted() {
    this.$social.load();
  },
};
</script>

