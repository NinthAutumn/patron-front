<template>
  <div class="feed-item">
    <div
      class="feed-item__container"
      v-if="feed.type =='donation'"
    >
      <div class="feed-item__content">
        <div
          class="feed-item__name"
          v-if="!feed.private"
        >
          <span style="color:var(--primary);">{{feed.data.name}}</span>
          tipped
          <strong>${{feed.amount}}</strong> to the project
          <span
            class="feed-item__message-label"
            v-if="feed.data.message.length>0"
          >and left a message:</span>
        </div>
        <div
          class="feed-item__name"
          v-else
        >
          <span style="color:var(--primary);">Anonymous</span>
          User
          Tipped
          <strong>${{feed.amount}}</strong> to the project
          <span
            class="feed-item__message-label"
            v-if="feed.data.message.length>0"
          >and left a message:</span>
        </div>
        <div class="feed-item__message-container">
          <div
            class="feed-item__message"
            v-if="feed.data.message.length>0"
          >{{feed.data.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feed: Object,
  },
};
</script>

<style lang="scss">
.feed-item {
  margin-bottom: 2rem;
  &__name {
    font-size: 1.6rem;
  }
  &__message-container {
    padding-left: 2rem;
  }
  &__message {
    background: var(--light-primary);
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
