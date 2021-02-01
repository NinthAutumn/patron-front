<template>
  <div class="project-page">
    <div class="page-container">
      <project-header
        :project="project"
        v-if="$device.isMobile"
      ></project-header>
      <desktop-header
        :project="project"
        v-else
      ></desktop-header>
      <nuxt-child :project="project"></nuxt-child>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectHeader from "@/components/ProjectHeader";
// import DesktopHeader from "@/components/Page/Project/Header";
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
    DesktopHeader: () => import("@/components/Page/Project/Header"),
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
