<template></template>

<script >
export default {
  props: {
    customStyle: {
      default: () => {},
      type: Object,
    },
    size: {
      type: String,
      default: "normal",
    },
    theme: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style lang="scss">
</style>
