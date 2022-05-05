<template>
  <div class="user-main">
    <div class="user-main__container">
      <div class="user-main__content">
        <div class="user-main__header">
          <div class="user-main__avatar">
            <img
              :src="user.avatar"
              alt
              height="100"
              width="100"
            />
          </div>
          <div class="user-main__username">{{user.username}}</div>
        </div>

        <h3>Subscriptions</h3>
        <div class="user-main__subscriptions">
          <user-subscription
            v-for="subscription of subscriptions"
            :key="subscription.id"
            :subscription="subscription"
          ></user-subscription>
        </div>
        <h3 style="margin-top:2rem;">Transaction History</h3>
        <user-transaction-list></user-transaction-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object },
  },
  data: () => ({
    subscriptions: [],
  }),
  async mounted() {
    this.subscriptions = await this.$http.$get(`/v1/subscriptions/user/list`);
  },
};
</script>

<style lang="scss">
.user-main {
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  background: var(--container-background-color);
  padding: 1rem;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__username {
    font-size: 2rem;
  }
  &__subscriptions {
    display: flex;
    flex-wrap: wrap;
  }
  border-radius: 1rem;
}
</style>
