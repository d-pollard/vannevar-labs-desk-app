const state = {
  list: [],
  initialized: true
}

const mutations = {
  addFile (state, { src, location }) {
    state.list = [...state.list, { src, location }]
  }
}

const actions = {
  addNewFile (context, { src, location }) {
    context.commit('addFile', { src, location })
  }
}

export default { state, mutations, actions, namespaced: true }
