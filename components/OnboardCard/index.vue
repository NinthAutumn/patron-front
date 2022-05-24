<template>
  <div class="onboarding">
    <div
      class="button button--back"
      style="margin-bottom:2rem;"
      v-if="step != 'is-creator'"
      @click="backHandler"
    >
      <fa icon="arrow-left"></fa>
    </div>
    <card-style>
      <is-creator
        @step="setStep"
        v-if="step === 'is-creator'"
      ></is-creator>
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
      if (this.step == "end") {
        this.$router.go("/creators");
      }
    },
    backHandler() {
      if (this.step == "project-setting" || this.step == "user-profile") {
        this.step = "is-creator";
      }
    },
    endHandler(user) {
      if (user) {
        this.$router.push(`/home`);
      } else {
        this.$router.push(`/creators`);
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
