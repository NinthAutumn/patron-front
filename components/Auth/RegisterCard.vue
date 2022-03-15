<template>
  <div class="login-card">
    <card-style class="login-card__form">
      <form
        v-if="email"
        @submit.prevent="submitHandler"
      >
        <h1 class="login-card__title">{{$t('basic.create_account')}}</h1>
        <label for="email">{{$t('form.email')}}</label>
        <input
          type="email"
          class="input input--normal input--white"
          :placeholder="$t('form.email')"
          aria-autocomplete="email"
          required
          name="email"
          autocomplete="email"
          v-model="form.email"
        />
        <label for="username">{{$t('form.username')}}</label>
        <input
          type="text"
          minlength="2"
          maxlength="30"
          name="username"
          class="input input--normal input--white"
          :placeholder="$t('form.username')"
          aria-autocomplete="username"
          required
          autocomplete="username"
          v-model="form.username"
        />
        <label for="password">{{$t('form.password')}}</label>
        <input
          class="input input--normal input--white"
          type="password"
          minlength="6"
          maxlength="255"
          name="password"
          aria-autocomplete="current-password"
          :placeholder="$t('form.password')"
          required
          v-model="form.password"
        />
        <label for>{{$t('form.password_confirmation')}}</label>
        <input
          class="input input--normal input--white"
          type="password"
          required
          minlength="6"
          maxlength="255"
          aria-autocomplete="current-password"
          :placeholder="$t('form.password_confirmation_placeholder')"
          v-model="form.password_confirmation"
        />

        <!-- <input-style type="password" theme="white"></input-style> -->
        <div class="flex-divider">
          <button
            type="submit"
            class="button button--primary button--very-round button--normal"
            style="margin-left: auto"
          >{{$t('basic.register')}}</button>
        </div>
      </form>
      <social-login
        @email="emailToggle"
        v-else
        register
      ></social-login>
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
        const available = await this.$store.dispatch(
          "user/isEmailAvailable",
          this.form.email
        );
        console.log(available);
        if (!available)
          return this.$toast.error("メールアドレがもう使用されています。");
        if (this.form.password != this.form.password_confirmation)
          return this.$toast.error(
            "パスワードとパスワードの確認が異なっています"
          );
        const { error, user } = await this.$store.dispatch(
          "auth/register",
          this.form
        );
        if (error) return this.$toast.error(error);
        this.$toast.success(this.$t("notification.register_success"));
        this.$router.push(`/user/onboarding`);
      } catch (error) {
        console.log(error);
        return this.$toast.error(this.$t("notification.internal_error"));
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
      color: var(---link-text-color);
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
