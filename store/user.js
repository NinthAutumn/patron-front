export const state = () => ({
  setting: {},
});

export const getters = {
  getSetting: (state) => state.setting,
};

export const mutations = {
  setSetting: (state, setting) => (state.setting = setting),
};
export const actions = {
  async isEmailAvailable({ commit }, email) {
    const { exists } = await this.$http.$get(
      `/v1/users/isEmailAvailable?email=${email}`
    );
    return exists;
  },
};
