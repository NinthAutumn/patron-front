export const state = () => ({
  auth: {
    id: 0,
  },
  interval: null,
});

export const getters = {
  isAuth: (state) => state.auth.id > 0,

  getAuth: (state) => state.auth,
  getInterval: (state) => state.interval,
};

export const mutations = {
  setAuth: (state, auth) => (state.auth = auth),
  setInterval: (state, interval) => (state.interval = interval),

  CLEAR_INTERVAL: (state) => clearInterval(state.interval),
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
      return {
        ...res,
      };
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
  async intervalRefresh({ commit, dispatch }) {
    commit("CLEAR_INTERVAL");
    let count = 1;
    let access_token;
    const interv = setInterval(async () => {
      if (count === 3) {
        try {
          const { error, token } = await dispatch("refreshToken");
          if (access_token)
            await this.$http.setToken(token.access_token, "Bearer");
          if (error) commit("CLEAR_INTERVAL");
        } catch (error) {
          await dispatch("logout");
          commit("CLEAR_INTERVAL");
        }
        count = 1;
      } else {
        try {
          let res = await this.$http.$patch("/v1/auth/refreshAccessToken");
          access_token = res.access_token;
          await this.$http.setToken(access_token, "Bearer");
          count++;
        } catch (error) {
          console.log(error);
          await dispatch("logout");
          commit("CLEAR_INTERVAL");
        }
      }
    }, 1000 * 60 * 3);
    commit("setInterval", interv);
    return { access_token };
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
