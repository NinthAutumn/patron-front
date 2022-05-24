<template>
  <div class="login-card">
    <card-style class="login-card__form">
      <form @submit.prevent="submitHandler">
        <h1 class="login-card__title">Login</h1>
        <label for>{{$t('form.credentials')}}</label>
        <input
          type="text"
          class="input input--normal input--white"
          :placeholder="$t('form.credentials')"
          aria-autocomplete="email username"
          autocomplete="email username"
          v-model="form.credential"
        />
        <label for>{{$t('form.password')}}</label>
        <input
          class="input input--normal input--white"
          type="password"
          aria-autocomplete="current-password"
          autocomplete="current-password"
          :placeholder="$t('form.password')"
          v-model="form.password"
        />
        <p
          class="login-card__password-forgot"
        >{{$t('basic.forgotten_password')}}</p>

        <!-- <input-style type="password" theme="white"></input-style> -->
        <div class="flex-divider">
          <button
            type="submit"
            class="button button--primary button--very-round button--normal"
            style="margin-left: auto"
          >{{$t('basic.login')}}</button>
        </div>
      </form>
      <nuxt-link
        to="/auth/register"
        tag="p"
        class="login-card__register"
      >{{$t('basic.create_account')}}</nuxt-link>

      <auth-social-login></auth-social-login>
    </card-style>
  </div>
</template>
<script >
export default {
  data: () => ({
    form: {
      credential: "",
      password: "",
    },
  }),
  methods: {
    async submitHandler() {
      try {
        const { error, user } = await this.$store.dispatch(
          "auth/login",
          this.form
        );
        if (error) return this.$toast.error(error);
        if (!user.onboarded) return this.$router.push("/user/onboarding");
        this.$toast.success(this.$t("notification.login_success"));
        this.$router.go(-1);
      } catch (error) {
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
    cursor: pointer;
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
  &__password-forgot {
    cursor: pointer;
    margin: 2rem 0;
    text-align: center;
    font-size: 1.2rem;
    // width: 100%;
  }
}
</style>
