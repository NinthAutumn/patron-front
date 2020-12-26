<template>
  <div class="is-creator">
    <h1>オンジンで。。。</h1>
    <div class="is-creator__actions">
      <button-card
        size="big"
        style="margin-bottom: 2rem; justify-content: center"
        color="primary--light"
        >支援をしてもらう</button-card
      >
      <button-card color="secondary" size="big" style="justify-content: center"
        >支援をする</button-card
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.is-creator {
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }
}
</style>
