import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ju from '@/components/ju'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ju',
      name: 'ju',
      component: ju
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
