<template>
  <div class="onboarding">
    <card-style>
      <is-creator @step="setStep" v-if="step === 'is-creator'"></is-creator>
      <payout-method
        @step="setStep"
        v-else-if="step === 'payout-method'"
      ></payout-method>
      <project-setting
        @step="setStep"
        v-else-if="step === 'project-setting'"
      ></project-setting>
      <user-profile
        @step="setStep"
        v-else-if="step === 'user-profile'"
      ></user-profile>
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
      project: "project/getProject",
    }),
  },
  methods: {
    setStep(step) {
      this.step = step;
    },
    endHandler(user) {
      if (user) {
        this.$router.push(`/home`);
      } else {
        this.$router.push(`/creator/${this.project.url}`);
      }
    },
  },
  data: () => ({
    step: "is-creator",
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
