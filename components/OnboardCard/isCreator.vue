<template>
  <div class="is-creator">
    <h1>{{$t('onboarding.at_onjin')}}</h1>
    <div class="is-creator__actions">
      <button-card
        size="big"
        style="margin-bottom: 2rem; justify-content: center"
        color="primary--light"
        @click="buttonHandler(true)"
      >{{$t('onboarding.to_get_support')}}</button-card>
      <button-card
        color="secondary"
        size="big"
        style="margin-bottom: 1rem; justify-content: center"
        @click="buttonHandler"
      >{{$t('onboarding.to_support')}}</button-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buttonHandler(creator) {
      if (creator) {
        this.$emit("step", "project-setting");
      } else {
        this.$emit("step", "user-profile");
      }
    },
  },
};
</script>

<style lang="scss">
.is-creator {
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-top: 2rem;
  }
}
</style>
