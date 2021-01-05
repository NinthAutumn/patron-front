<template>
  <div class="project-page">
    <project-header :project="project"></project-header>
    <nuxt-child :project="project"></nuxt-child>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectHeader from "@/components/ProjectHeader";
export default {
  computed: {
    ...mapGetters({
      project: "project/getProject",
    }),
  },
  layout(ctx) {
    return ctx.isMobile ? "Mobile/project" : "DesktopNav";
  },
  components: {
    ProjectHeader,
  },
  async fetch() {
    await this.$store.dispatch(
      "project/fetchProject",
      this.$route.params.project
    );
  },
};
</script>

<style lang="scss">
.project-page {
  p {
    font-size: 1.2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
}
</style>
