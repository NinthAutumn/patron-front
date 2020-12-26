<template>
  <div class="onboarding">
    <card-style>
      <is-creator v-if="step === 0"></is-creator>
    </card-style>
  </div>
</template>

<script>
import IsCreator from "./isCreator";
export default {
  components: {
    IsCreator,
  },
  data: () => ({
    step: 0,
  }),
};
</script>

<style lang="scss">
.onboarding {
  @media screen and (min-width: 700px) {
    max-width: 50rem;
    margin: 0 auto;
  }
}
</style>
