<template>
  <div class="project-page">
    <div class="page-container">
      <project-page :project="project"></project-page>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  components: {},
  async asyncData({ store, route, error }) {
    // if (route.params.project === "user") redirect("/");
    try {
      const res = await store.dispatch(
        "project/fetchProject",
        route.params.project
      );
      if (res?.project && store.getters["auth/isAuth"])
        await store.dispatch("subscription/fetchSubscription", res.project.id);
    } catch (e) {
      return error({ statusCode: 404, message: "Project not found" });
    }
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
