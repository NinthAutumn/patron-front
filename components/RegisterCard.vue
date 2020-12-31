<template>
  <div class="login-card">
    <card-style class="login-card__form">
      <form v-if="email" @submit.prevent="submitHandler">
        <h1 class="login-card__title">アカウントを作る</h1>
        <label for>Eメール</label>
        <input
          type="text"
          class="input input--normal input--white"
          placeholder="Eメール"
          aria-autocomplete="email"
          autocomplete="email"
          v-model="form.email"
        />
        <label for>ユーザー名</label>
        <input
          type="text"
          class="input input--normal input--white"
          placeholder="ユーザー名"
          aria-autocomplete="username"
          autocomplete="username"
          v-model="form.username"
        />
        <label for>パスワード</label>
        <input
          class="input input--normal input--white"
          type="password"
          aria-autocomplete="current-password"
          placeholder="パスワード"
          v-model="form.password"
        />
        <label for>パスワードを確認</label>
        <input
          class="input input--normal input--white"
          type="password"
          aria-autocomplete="current-password"
          placeholder="パスワードをもう一度"
          v-model="form.password_confirmation"
        />

        <!-- <input-style type="password" theme="white"></input-style> -->
        <div class="flex-divider">
          <button
            type="submit"
            class="button button--primary button--very_round button--normal"
            style="margin-left: auto"
          >
            アカウントを作成
          </button>
        </div>
      </form>
      <social-login @email="emailToggle" v-else register></social-login>
    </card-style>
  </div>
</template>
<script >
import SocialLogin from "./SocialLogin.vue";

export default {
  components: {
    SocialLogin,
  },
  data: () => ({
    form: {
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
    },
    email: false,
  }),
  methods: {
    emailToggle() {
      this.email = !this.email;
    },
    async submitHandler() {
      try {
        if (this.form.password != this.form.password_confirmation)
          return this.$toast.error(
            "パスワードとパスワードの確認が異なっています"
          );
        const { error, user } = await this.$store.dispatch(
          "auth/register",
          this.form
        );
        if (error) return this.$toast.error(error);
        this.$toast.success("アカウント作成に成功しました");
        this.$router.push(`/user/${user.id}/onboarding`);
      } catch (error) {
        console.log(error);
        return this.$toast.error("サーバーで問題がありました");
      }
    },
  },
};
</script>
<style lang="scss">
.login-card {
  &__form {
    margin-top: 1rem;
    @media screen and (min-width: 700px) {
      max-width: 50rem;
      margin: 0 auto;
    }
  }
  &__register {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.4rem;
    @include themify($themes) {
      color: themed("linkTextColor");
    }
    font-weight: bold;
  }
  &__title {
    margin: 1rem 0;
    text-align: center;
  }
  .flex-divider {
    margin: 1rem 0;
  }
}
</style>
