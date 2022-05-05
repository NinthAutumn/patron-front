<template>
  <div class="plan-item">
    <div class="plan-item__container">
      <div class="plan-item__title">{{plan.title}}</div>
      <div class="plan-item__desc">{{plan.description}}</div>
      <div class="plan-item__footer flex flex--align flex--between">
        <div class="plan-item__price">${{plan.price}}/Month</div>
        <div class="plan-item__action">
          <button
            @click="joinHandler"
            v-if="subscription.tier_id!=plan.id"
            class="button--secondary button--normal button--very-round button"
          >Join Plan</button>
          <button
            v-else
            class="button--secondary--open button--normal button--very-round button"
          >Current Plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      subscription: "subscription/getSubscription",
    }),
  },
  props: {
    plan: Object,
  },
  data: () => ({}),
  methods: {
    joinHandler() {
      this.$emit("join", this.plan);
    },
  },
};
</script>

<style lang="scss">
.plan-item {
  &__container {
    padding: 2rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    box-shadow: var(--box-shadow);
    margin-bottom: 2rem;
  }
  &__title {
    font-size: 2.5rem;
  }

  &__footer {
    @media screen and (max-width: 750px) {
      flex-direction: column;
    }
  }
  &__desc {
    flex-grow: 1;
    font-size: 1.6rem;
  }

  &__price {
    font-size: 1.8rem;
    font-weight: bold;
  }
}
</style>
