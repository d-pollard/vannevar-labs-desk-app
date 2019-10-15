const state = {
  list: [],
  initialized: true
}

const mutations = {
  addFile (state, { src, location }) {
    state.list = [...state.list, { src, location }]
  },
  add (state, files) {
    state.list = [...state.list, ...files]
  }
}

const actions = {
  addNewFile (context, { src, location }) {
    context.commit('addFile', { src, location })
  },
  add (context, files) {
    context.commit('add', files)
  }
}

export default { state, mutations, actions, namespaced: true }
