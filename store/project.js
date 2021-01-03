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
    commit,
    state
  }, url) {
    try {
      if (url === state.project.page_url) return;
      const res = await this.$http.$get(`/v1/projects/${url}`);
      commit('setProject', res.project);
      return {
        error: false
      }
    } catch (error) {
      return {
        error: error.response.data.error
      }
    }
  },
  async isPageUrlAvailable({}, url) {
    try {
      const res = await this.$http.$get(`/v1/projects/${url}/isAvailable`);

      return res.available;
    } catch (error) {
      this.$toast.error(error.response.data.error);
      return false;
    }
  }
}
