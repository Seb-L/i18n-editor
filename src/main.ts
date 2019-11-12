import 'reflect-metadata'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import './plugins/composition-api'
import './plugins/api'
import i18n from './i18n'

import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
