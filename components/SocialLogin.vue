<template>
  <div class="social-login">
    <h1 class="social-login__title" v-if="register">アカウントを作る</h1>
    <div
      class="social-login__item"
      :style="item.style"
      v-for="item of list"
      :key="item.name"
      @click="clickHandler(item.type)"
    >
      <div class="social-login__icon">
        <fa :icon="item.icon"></fa>
      </div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    register: Boolean,
  },
  mounted() {
    if (this.register) {
      this.list.unshift({
        name: "Eメールで作る",
        icon: "envelope",
        style: { background: "white" },
        type: "email",
      });
    }
  },
  methods: {
    clickHandler(type) {
      const typeCase = {
        email: () => {
          this.$emit("email");
        },
        google: () => {},
        facebook: () => {},
        line: () => {},
        twitter: () => {},
      };

      typeCase[type]();
    },
  },
  data: () => ({
    list: [
      {
        name: "グーグル",
        icon: { iconName: "google", prefix: "fab" },
        style: { background: "white" },
        type: "google",
      },
      {
        name: "フェースブック",
        icon: { iconName: "facebook", prefix: "fab" },
        style: { background: "white", color: "#4065b4" },
        type: "facebook",
      },
      {
        name: "ツイッター",
        icon: { iconName: "twitter", prefix: "fab" },
        style: { background: "white", color: "#059ff5" },
        type: "twitter",
      },
      {
        name: "ライン",
        icon: { iconName: "line", prefix: "fab" },
        style: { background: "white", color: "#1bb71f" },
        type: "line",
      },
    ],
  }),
};
</script>

<style lang="scss">
.social-login {
  &__title {
    text-align: center;
    margin: 1rem 0;
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    border-radius: 10rem;
    // box-shadow: ${theme["default"].verySmallBoxShadow};
    margin-bottom: 1.5rem;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    @include themify($themes) {
      box-shadow: themed("verySmallBoxShadow");
    }
  }
  p {
    color: inherit;
    margin: 0 auto;
    font-weight: bold;
  }
  &__icon {
    font-size: inherit;
    color: inherit;
  }
}
</style>
