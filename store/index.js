export const state = () => ({
  users: {
    id: 0,
    username: ''
  }
})

export const getters = {
  getUser: state => state.users,
  isAuth: state => state.users.id > 1,
}

export const mutations = {
  setAuth: (state, data) => {
    state.auth = data.auth;
    state.user = data.user;
  }
}
export const actions = {

}
