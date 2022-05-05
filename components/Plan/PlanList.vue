<template>
  <div class="plan-list">
    <plan-item
      v-for="(plan,index) of plans"
      :key="index"
      :plan="plan"
      @join="joinHandler"
    ></plan-item>

    <plan-join-plan
      :plan="join"
      v-if="join.id"
      @close="join={}"
      :project="project"
    ></plan-join-plan>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data: () => ({
    plans: [],
    join: {},
  }),
  methods: {
    joinHandler(plan) {
      this.join = plan;
    },
  },
  async mounted() {
    const plans = await this.$http.$get(
      `/v1/subscriptions/${this.project?.id || 1}/tiers`
    );
    this.plans = plans;
  },
};
</script>

<style lang="scss">
.plan-list {
  margin-top: 2rem;
}
</style>
