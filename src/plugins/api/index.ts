import Vue from 'vue'
import apiPlugin from './plugin'

Vue.use(apiPlugin, {
  endpoints: {
    projects: 'api/projects',
    locales: 'api/locales'
  }
})
