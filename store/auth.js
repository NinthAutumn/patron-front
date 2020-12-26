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
      this.$storage.setCookie('Authorization', res.jwt.jwt)
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
  async login({
    commit
  }, form) {
    try {
      const res = await this.$http.$post("/v1/auth/login", form);
      commit('setAuth', res.user);
      this.$storage.setCookie('Authorization', res.jwt.jwt)
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
