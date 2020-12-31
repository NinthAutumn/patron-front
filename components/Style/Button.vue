<template>
  <button
    @click.prevent="$emit('click')"
    class="button"
    :class="`button--${color} button--${type} button--${size} ${
      shadow ? 'button--shadow' : ''
    }`"
  >
    <div class="button__icon" v-if="icon">
      <fa :icon="icon"></fa>
    </div>
    <slot></slot>
  </button>
</template>

<script >
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "very_round",
    },
    icon: Object,
    size: {
      type: String,
      default: "normal",
    },
    shadow: Boolean,
  },
};
</script>

<style lang="scss">
</style>
