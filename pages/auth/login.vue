<template>
  <section id="login-page" class="container-padding">
    <login-card></login-card>
  </section>
</template>

<script >
export default {
  components: {
    LoginCard: () => import("@/components/LoginCard.vue"),
  },
};
</script>

