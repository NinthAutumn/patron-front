<template>
  <div
    class="claim-url"
    :class="`claim-url--${size}`"
  >
    <div class="claim-url__container">
      <div class="claim-url__initial">Onjin.jp/</div>
      <input
        type="text"
        v-model="url"
        :placeholder="$t('form.username')"
      />
      <button-card
        v-if="button"
        @click="clickHandler"
        class="claim-url__button"
        :size="buttonSize"
      >{{buttonPlaceholder}}</button-card>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    url(val) {
      this.$emit("input", val);
    },
  },
  data: () => ({
    url: "",
  }),
  props: {
    button: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "normal",
    },
    buttonPlaceholder: {
      type: String,
      default: "Claim",
    },
    buttonSize: {
      type: String,
      default: "small",
    },
  },
  methods: {
    clickHandler() {
      this.$emit("selected", this.url);
    },
  },
};
</script>

<style lang="scss">
.claim-url {
  $self: &;

  &--normal {
    font-size: 10px;
    #{$self}__container {
      border-radius: 10rem;
      height: 4.5rem;
      display: flex;
      align-items: center;
      @include themify($themes) {
        box-shadow: themed("boxShadow");
        background: white;
      }
      padding: 0.5rem 1.5rem;
    }
  }
  &--large {
    font-size: 11px;
    #{$self}__container {
      border-radius: 10em;
      height: 5em;
      display: flex;
      align-items: center;
      @include themify($themes) {
        box-shadow: themed("boxShadow");
        background: white;
      }
      padding: 0.5em 2em;
    }
  }

  &__initial {
    font-size: 1.5em;
    font-weight: bold;
  }
  &__icon {
  }
  input {
    height: 100%;
    border-radius: 10em;
    box-sizing: border-box;
    width: 100%;
    // font-weight: bold;
    padding: 0 0.1em;
    // padding-top: 0.5em;
    font-size: 1.7em;
    // padding-left: 2rem;
    border: none;
    font-weight: 200;
    // opacity: 0.9;
    // color: rgb(105, 105, 105);
    // color: $success;
  }
  input:active,
  input:focus {
    outline: none;
  }
}
</style>
