const state = {
  list: { inbox: [], outbox: [], desk: [] }
}

const mutations = {
  add (state, { location, newFiles }) {
    state.list[location] = [...newFiles, ...state.list[location]]
  }
}

const actions = {
  add (context, { newFiles, location }) {
    context.commit('add', { newFiles, location })
  }
}

export default { state, mutations, actions, namespaced: true }
