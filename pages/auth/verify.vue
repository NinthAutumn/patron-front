<template></template>

<script>
export default {
  async asyncData({ route, redirect, $http }) {
    try {
      await $http.$patch(
        `/v1/auth/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${route.query.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response.data.error);
      if (error.status) {
        console.log(error.status);
      }
      console.log(error);
    }

    redirect("/user");
  },
};
</script>

<style lang="scss">
</style>
