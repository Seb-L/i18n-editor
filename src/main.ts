import 'reflect-metadata'
import Vue from 'vue'
import { createConnection } from 'typeorm'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import './plugins/composition-api'
import i18n from './i18n'

import { Project } from './entity/Project'
import { Locales } from './entity/Locales'

import './assets/tailwind.css'

Vue.config.productionTip = false

// createConnection({
//   type: 'sqlite',
//   database: 'data.sqlite',
//   logging: false,
//   entities: [
//     Project,
//     Locales
//   ]
// })
//   .then(() => {
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
// })
