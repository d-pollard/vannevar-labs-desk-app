const state = {
  list: { inbox: [], outbox: [], desk: [] }
}

const mutations = {
  add (state, { location, newFiles }) {
    state.list[location] = [...newFiles, ...state.list[location]]
  },
  move (state, { oldLocation, newLocation, oldIndex, src, x, y }) {
    state.list[oldLocation] = state.list[oldLocation].filter((item, index) => index !== oldIndex)
    state.list[newLocation] = [{ src, x, y }, ...state.list[newLocation]]
  },
  clear (state, location) {
    state.list[location] = []
  },
  remove (state,  { location, index: oldIndex }) {
    state.list[location] = state.list[location].filter((item, index) => index !== oldIndex)
  }
}

const actions = {
  add (context, { newFiles, location }) {
    context.commit('add', { newFiles, location })
  },
  move (context, { oldLocation, newLocation, oldIndex, src, x, y }) {
    context.commit('move', { oldLocation, newLocation, oldIndex, src, x, y })
  },
  clear (context, location) {
    context.commit('clear', location)
  },
  remove (context, { location, index }) {
    context.commit('remove', { location, index })
  }
}

export default { state, mutations, actions, namespaced: true }
