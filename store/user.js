export const state = () => ({
  setting: {}
})

export const getters = {
  getSetting: state => state.setting
}

export const mutations = {
  setSetting: (state, setting) => state.setting = setting
}
export const actions = {

}
