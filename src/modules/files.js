const state = {
  list: { inbox: [], outbox: [], desk: [] }
}

const mutations = {
  add (state, { location, newFiles }) {
    state.list[location] = [...newFiles, ...state.list[location]]
  },
  move (state, { oldLocation, newLocation, id, src, x, y }) {
    state.list[oldLocation] = state.list[oldLocation].filter(item => item.id !== id)
    state.list[newLocation] = [{ src, x, y, id }, ...state.list[newLocation]]
  },
  clear (state, location) {
    state.list[location] = []
  },
  remove (state, { location, id }) {
    state.list[location] = state.list[location].filter(item => item.id !== id)
  }
}

const actions = {
  add (context, { newFiles, location }) {
    context.commit('add', { newFiles, location })
  },
  move (context, { oldLocation, newLocation, id, src, x, y }) {
    context.commit('move', { oldLocation, newLocation, id, src, x, y })
  },
  clear (context, location) {
    context.commit('clear', location)
  },
  remove (context, { location, id }) {
    context.commit('remove', { location, id })
  }
}

export default { state, mutations, actions, namespaced: true }
