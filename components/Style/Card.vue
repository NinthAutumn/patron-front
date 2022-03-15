<template>
  <div class="card-style">
    <div
      class="card-style__container"
      :class="`card-style__container--${theme}`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    theme: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style lang="scss">
.card-style {
  &__container {
    padding: 1rem;
    border-radius: 0.4rem;
    &--white {
      @include themify($themes) {
        background-color: themed("containerBackgroundColor");
      }
    }
    &--primary {
      @include themify($themes) {
        background-color: var(--background-color);
      }
    }
  }
}
</style>
