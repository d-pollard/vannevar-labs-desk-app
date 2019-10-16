import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/desk-app',
      name: 'desk.app',
      component: () => import(/* webpackChunkName: "desktop.app" */ './views/DeskApp.vue')
    }
  ]
})
