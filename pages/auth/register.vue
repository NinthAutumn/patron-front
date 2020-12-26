<template>
  <div id="register-page" class="container-padding">
    <register-card></register-card>
  </div>
</template>

<script>
export default {
  components: {
    RegisterCard: () => import("@/components/RegisterCard.vue"),
  },
};
</script>

<style lang="scss">
</style>
