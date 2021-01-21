<template>
  <div class="feed-card">
    <div class="feed-card__container">
      <div class="feed-card__header">
        <h2>フィード</h2>
        <p>メッセージを残す</p>
      </div>

      <div class="feed-card__list"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    feeds: [],
  }),
};
</script>

<style lang="scss">
</style>
