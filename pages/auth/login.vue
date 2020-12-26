<template>
  <div id="login-page" class="container-padding">
    <login-card></login-card>
  </div>
</template>

<script >
export default {
  components: {
    LoginCard: () => import("@/components/LoginCard.vue"),
  },
};
</script>

