export const state = () => ({
  creator: {},
});

export const getters = {
  getCreator: (state) => state.creator,
};

export const mutations = {
  setCreator: (state, creator) => (state.creator = creator),
};
export const actions = {
  async fetchCreator({ commit }) {
    try {
      const res = await this.$http.$get(`/v1/creators/show`);
      commit("setCreator", res);
    } catch (error) {
      return {
        error,
      };
    }
  },
};
