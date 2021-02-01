<template>
  <div class="project-side">
    <div class="project-side__content">
      <img
        :src="project.avatar"
        alt
        class="avatar"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      project: "project/getProject",
    }),
  },
};
</script>

<style lang="scss">
</style>
