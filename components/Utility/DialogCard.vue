

<template functional>
  <div class="dialog-card">
    <div class="dialog-card__container">
      <div
        class="dialog-card__content"
        :style="{ ...customStyle }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script >
// import { CustomStyle } from '~/models/definitions'

export default {
  props: {
    customStyle: {
      type: Object,
      required: false,
      // default: {}
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-card {
  $self: &;

  // @media screen and (max-width: 700px) {
  //   body {
  //     height: 100%;
  //   }
  //   &__container {
  //   }
  //   &__content {
  //     width: 100% !important;
  //     align-self: flex-end;
  //     // height: 100% !important;
  //     padding: 1rem !important;
  //     border-radius: 0 !important;
  //   }
  // }

  &--disabled {
    visibility: hidden;
    transition: 300ms;
  }

  overscroll-behavior: contain;

  &__container {
    overscroll-behavior: contain;
    width: 100%;
    height: 100%;
    position: fixed;
    border: none;
    z-index: 2000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: ;
    &--low {
      overscroll-behavior: contain;
      width: 100%;
      max-height: 70%;
      position: fixed;
      border: none;
      z-index: 2000;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__content {
    padding: 2rem;
    box-sizing: border-box;
    max-width: 100%;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    border-radius: 0.4rem;
    background-color: #fff;
    overscroll-behavior: none;

    @include themify($themes) {
      background: var(---text-background-color);
      box-shadow: themed("boxShadowBig");
    }

    pointer-events: auto;

    // &::before {
    //   content: "12";
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    // }
  }
}
</style>
