export const state = () => ({
  project: {}
})

export const getters = {
  getProject: state => state.project
}

export const mutations = {
  setProject: (state, project) => state.project = project
}
export const actions = {
  async fetchProject({
    commit
  }, url) {
    try {
      const res = await this.$http.$get(`/v1/projects/${url}`);
      commit('setProject', res.project);
      return {
        error: false
      }
    } catch (error) {
      return {
        error
      }
    }
  },
  async isProjectUrlAvailable({}, url) {
    try {
      const res = await this.$http.$get(`/v1/projects/${url}/isAvailable`);
      return res.available;
    } catch (error) {
      return false;
    }
  }
}
