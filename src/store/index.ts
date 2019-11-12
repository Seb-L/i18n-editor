import Vue from 'vue'
import Vuex from 'vuex'
import { projects } from './projects'
import { selectedProject } from './selected-project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects,
    selectedProject
  }
})
