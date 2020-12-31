<template>
  <div class="onboarding">
    <card-style>
      <is-creator v-if="step === 'is-creator'"></is-creator>
      <payout-method v-else-if="step === 'payout-method'"></payout-method>
      <project-setting v-else-if="step === 'project-setting'"></project-setting>
      <user-profile v-else-if="step === 'user-profile'"></user-profile>
    </card-style>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IsCreator from "./isCreator";
export default {
  components: {
    IsCreator,
    PayoutMethod: () => import("./PayoutMethod"),
    ProjectSetting: () => import("./ProjectSetting"),
    UserProfile: () => import("./UserProfile"),
  },
  computed: {
    ...mapGetters({
      creator: "creator/getCreator",
    }),
  },
  methods: {
    endHandler(user) {
      if (user) {
        this.$router.push(`/home`);
      } else {
        this.$router.push(`/creator/${this.creator.id}`);
      }
    },
  },
  data: () => ({
    step: "user-profile",
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
