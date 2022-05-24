export const state = () => ({
  project: {},
  feeds: [],
});

export const getters = {
  getProject: (state) => state.project,
  getFeeds: (state) => state.feeds,
};

export const mutations = {
  SET_PROJECT: (state, project) => (state.project = project),
  SET_FEED: (state, feeds) => (state.feeds = feeds),
};
export const actions = {
  async fetchProject({ commit, state }, url) {
    try {
      if (url === state.project.page_url) return { error: "already_called" };
      const project = await this.$http.$get(`/v1/projects/${url}`);
      commit("SET_PROJECT", project);
      return {
        project,
        error: false,
      };
    } catch (error) {
      return {
        error: error.response.data.error,
      };
    }
  },
  async fetchFeeds({ commit }, { project_id, limit, page }) {
    const feeds = await this.$http.$get(
      `/v1/transactions/project/feeds?project_id=${project_id}&limit=${limit}&page=${page}`
    );
    commit("SET_FEED", feeds);
  },
  async isPageUrlAvailable({}, url) {
    try {
      const res = await this.$http.$get(`/v1/projects/${url}/isAvailable`);
      if (res.error) {
        this.$toast.error(res.error);
        return false;
      }
      return res.available;
    } catch (error) {
      this.$toast.error(error.response.data.error);
      return false;
    }
  },
};
