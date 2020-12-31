<template>
  <div class="claim-url">
    <div class="claim-url__container">
      <div class="claim-url__initial">Onjin.jp/</div>
      <input type="text" v-model="url" />
      <button-card @click="clickHandler" class="claim-url__button" size="small"
        >選ぶ</button-card
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "",
  }),
  methods: {
    clickHandler() {
      this.$emit("selected", this.url);
    },
  },
};
</script>

<style lang="scss">
.claim-url {
  &__container {
    border-radius: 10rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    @include themify($themes) {
      box-shadow: themed("boxShadow");
    }
    padding: 0.5rem 1.5rem;
  }
  &__initial {
    font-size: 1.5rem;
    font-weight: bold;
  }
  &__icon {
  }
  input {
    height: 100%;
    border-radius: 10rem;
    box-sizing: border-box;
    width: 100%;
    // font-weight: bold;
    padding: 0 0.1rem;
    padding-top: 0.5rem;
    font-size: 1.7rem;
    // padding-left: 2rem;
    border: none;
  }
  input:active,
  input:focus {
    outline: none;
  }
}
</style>
