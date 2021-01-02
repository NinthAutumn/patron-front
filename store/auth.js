export const state = () => ({
  auth: {
    id: 0
  }
})

export const getters = {
  isAuth: state => state.auth.id > 0,
  getAuth: state => state.auth
}

export const mutations = {
  setAuth: (state, auth) => state.auth = auth
}
export const actions = {
  async register({
    commit
  }, form) {
    try {
      const res = await this.$http.$post('/v1/auth/register', form);
      commit('setAuth', res.user);
      this.$storage.setCookie('Authorization', res.jwt.jwt);
      this.$storage.setCookie("RefreshToken", res.jwt.refresh_token)
      this.$http.setToken(res.jwt.jwt, 'Bearer')
      return {
        error: false,
        user: res.user
      }
    } catch (error) {
      if (error.response.data.error) {
        return {
          error: error.response.data.error
        }
      } else {
        return {
          error: error.message
        }
      }
    }
  },
  async refreshToken({
    commit
  }) {
    try {
      const res = await this.$http.$patch('/v1/auth/refreshToken', {
        refresh_token: this.$storage.getCookie('RefreshToken')
      })
      commit('setAuth', res.user);
      this.$storage.setCookie("RefreshToken", res.jwt.refresh_token);
      this.$storage.setCookie('Authorization', res.jwt.jwt);
      this.$http.setToken(res.jwt.jwt, 'Bearer')
    } catch (error) {
      return {
        error: error.message
      }
    }
  },
  async fetchUserSelf({
    commit
  }) {
    try {
      const res = await this.$http.$get("/v1/users/self");
      commit('setAuth', res.user);
    } catch (error) {
      return {
        error
      }
    }

  },
  async login({
    commit
  }, form) {
    try {
      const res = await this.$http.$post("/v1/auth/login", form);
      commit('setAuth', res.user);
      this.$storage.setCookie('Authorization', res.jwt.jwt)
      this.$http.setToken(res.jwt.jwt, 'Bearer')
      return {
        error: false
      }
    } catch (error) {
      if (error.response.data.error) {
        return {
          error: error.response.data.error
        }
      } else {
        return {
          error: error.message
        }
      }

    }

  }
}
