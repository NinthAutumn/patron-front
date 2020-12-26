<template>
  <div class="login-card">
    <card-style class="login-card__form">
      <form @submit.prevent="submitHandler">
        <h1 class="login-card__title">ログイン</h1>
        <label for>Eメール・ユーザー名</label>
        <input
          type="text"
          class="input input--normal input--white"
          placeholder="Eメール・ユーザー名"
          aria-autocomplete="email username"
          autocomplete="email username"
          v-model="form.credential"
        />
        <label for>パスワード</label>
        <input
          class="input input--normal input--white"
          type="password"
          aria-autocomplete="current-password"
          autocomplete="current-password"
          placeholder="パスワード"
          v-model="form.password"
        />
        <p class="login-card__password-forgot">パスワードを忘れた</p>

        <!-- <input-style type="password" theme="white"></input-style> -->
        <div class="flex-divider">
          <button
            type="submit"
            class="button button--primary button--very_round button--normal"
            style="margin-left: auto"
          >
            ログインする
          </button>
        </div>
      </form>
      <nuxt-link to="/auth/register" tag="p" class="login-card__register"
        >アカウントを作る</nuxt-link
      >

      <social-login></social-login>
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
      credential: "",
      password: "",
    },
  }),
  methods: {
    async submitHandler() {
      try {
        const { error } = await this.$store.dispatch("auth/login", this.form);
        if (error) return this.$toast.error(error);
        this.$toast.success("ログインに成功しました");
        this.$router.go(-1);
      } catch (error) {
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
  &__password-forgot {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.2rem;
    // width: 100%;
  }
}
</style>
