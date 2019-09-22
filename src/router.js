import Vue from 'vue'
import Router from 'vue-router'
import Markdown from './components/Markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/:name',
      component: Markdown
    },
    {
      path: '/:tag/:name',
      component: Markdown
    },
  ],
  mode: 'history'
})
