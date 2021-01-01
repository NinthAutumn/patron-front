export const state = () => ({
  creator: {}
})

export const getters = {
  getCreator: state => state.creator
}

export const mutations = {
  setCreator: (state, creator) => state.creator = creator,
}
export const actions = {
  async fetchCreator({
    commit
  }, id) {
    try {
      const res = this.$http.$get(`/v1/creators/${id}`);
      commit('setCreator', res);
    } catch (error) {
      return {
        error
      }
    }
  }
}
