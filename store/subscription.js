export const state = () => ({ subscription: {} });

export const getters = {
  getSubscription: (state) => state.subscription,
};

export const mutations = {
  SET_SUBSCRIPTION: (state, subscription) =>
    (state.subscription = subscription),
};
export const actions = {
  async fetchSubscription({ commit }, project_id) {
    const subscription = await this.$http.$get(
      `/v1/subscriptions/${project_id}/self`
    );
    commit("SET_SUBSCRIPTION", subscription);
  },
};
