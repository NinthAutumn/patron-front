<template>
  <div class="feed-list">
    <div class="feed-list__container">
      <feed-item
        v-for="feed of feeds"
        :key="feed.id"
        :feed="feed"
      ></feed-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    project: Object,
  },
  data: () => ({
    limit: 15,
    page: 1,
  }),
  computed: {
    ...mapGetters({
      feeds: "project/getFeeds",
    }),
  },
  async mounted() {
    await this.$store.dispatch("project/fetchFeeds", {
      project_id: this.project.id,
      limit: this.limit,
      page: this.page,
    });
  },
};
</script>

<style lang="scss">
.feed-list {
  min-height: 30rem;
  &__container {
  }
}
</style>
