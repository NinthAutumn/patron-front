<template>
  <div class="onboarding">
    <card-style>
      <is-creator v-if="step === 'is-creator'"></is-creator>
      <payout-method v-else-if="step === 'payout-method'"></payout-method>
    </card-style>
  </div>
</template>

<script>
import IsCreator from "./isCreator";
export default {
  components: {
    IsCreator,
    PayoutMethod: () => import("./PayoutMethod"),
  },
  data: () => ({
    step: "payout-method",
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
