import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

const vuexLocal = new VuexPersistence({
  storage: localforage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [ vuexLocal.plugin ]
})
