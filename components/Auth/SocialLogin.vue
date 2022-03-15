<template>
  <div class="social-login">
    <h1
      class="social-login__title"
      v-if="register"
    >{{$t('basic.create_account')}}</h1>
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
        name: this.$t("basic.create_using_email"),
        icon: "envelope",
        style: { background: "white" },
        type: "email",
      });
    }
  },
  methods: {
    async clickHandler(type) {
      const typeCase = {
        email: () => {
          this.$emit("email");
        },
        google: async () => {
          try {
            await window.google_auth2.signIn().then(async (val) => {
              let access_token = "";
              Object.keys(val).forEach((key) => {
                console.log(val);
                if (val[key]?.access_token) {
                  access_token = val[key].access_token;
                }
              });
              console.log(access_token);
              await this.$store.dispatch("auth/googleAuth", access_token);
            });
            this.checkRoute();
          } catch (error) {
            console.log(error);
          }
        },
        facebook: () => {},
        line: () => {},
        twitter: () => {},
      };

      await typeCase[type]();
    },
  },
  data() {
    return {
      list: [
        {
          name: this.$t("basic.google"),
          icon: { iconName: "google", prefix: "fab" },
          style: { background: "white" },
          type: "google",
        },
        // {
        //   name: this.$t("basic.facebook"),
        //   icon: { iconName: "facebook", prefix: "fab" },
        //   style: { background: "white", color: "#4065b4" },
        //   type: "facebook",
        // },
        // {
        //   name: this.$t("basic.twitter"),
        //   icon: { iconName: "twitter", prefix: "fab" },
        //   style: { background: "white", color: "#059ff5" },
        //   type: "twitter",
        // },
        // {
        //   name: this.$t("basic.line"),
        //   icon: { iconName: "line", prefix: "fab" },
        //   style: { background: "white", color: "#1bb71f" },
        //   type: "line",
        // },
      ],
    };
  },
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
      box-shadow: var(--very-small-box-shadow);
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
