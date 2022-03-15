export const state = () => ({
  auth: {
    id: 0,
  },
});

export const getters = {
  isAuth: (state) => state.auth.id > 0,
  getAuth: (state) => state.auth,
};

export const mutations = {
  setAuth: (state, auth) => (state.auth = auth),
};
export const actions = {
  async register({ commit, dispatch }, form) {
    try {
      const res = await this.$http.$post("/v1/auth/register", form);
      await dispatch("setAuth", res);
      return {
        error: false,
        user: res.user,
      };
    } catch (error) {
      if (error.response.data.error) {
        return {
          error: error.response.data.error,
        };
      } else {
        return {
          error: error.message,
        };
      }
    }
  },
  async refreshToken({ commit, dispatch }) {
    try {
      const res = await this.$http.$patch("/v1/auth/refreshToken", {
        refresh_token: this.$storage.getCookie("refresh_token"),
      });
      await dispatch("setAuth", res);
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  async fetchUserSelf({ commit }) {
    try {
      const res = await this.$http.$get("/v1/users/self");
      commit("setAuth", res.user);
    } catch (error) {
      return {
        error,
      };
    }
  },
  async setAuth({ commit }, res) {
    commit("setAuth", res.user);
    this.$storage.setCookie("access_token", res.token.access_token);
    this.$storage.setCookie("refresh_token", res.token.refresh_token);
    this.$http.setToken(res.token.access_token, "Bearer");
    if (!res.user.onboarded) this.$router.push("/user/onboarding");
  },
  async googleAuth({ commit, dispatch }, access_token) {
    const res = await this.$http.$post(
      `/v1/auth/social/google?token=${access_token}`
    );
    await dispatch("setAuth", res);
  },
  async login({ commit, dispatch }, form) {
    try {
      const res = await this.$http.$post("/v1/auth/login", form);
      await dispatch("setAuth", res);
      return {
        error: false,
        user: res.user,
      };
    } catch (error) {
      if (error.response.data.error) {
        return {
          error: error.response.data.error,
          user: {},
        };
      } else {
        return {
          error: error.message,
          user: {},
        };
      }
    }
  },
};
