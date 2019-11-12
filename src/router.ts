import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/:projectId',
      name: 'project',
      component: () => import(/* webpackChunkName: "about" */ './views/_project/Index.vue'),
      children: [
        {
          path: '/:projectId/key/:key',
          name: 'keyDetails',
          component: () => import(/* webpackChunkName: "about" */ './views/_project/KeyDetails.vue')
        }
      ]
    }
  ]
})
