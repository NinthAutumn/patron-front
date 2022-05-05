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
export default {
  props: {
    project: Object,
  },
  data: () => ({
    feeds: [],
    limit: 15,
    page: 1,
  }),
  async mounted() {
    this.feeds = await this.$http.$get(
      `/v1/transactions/project/feeds?project_id=${this.project.id}&limit=${this.limit}&page=${this.page}`
    );
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
