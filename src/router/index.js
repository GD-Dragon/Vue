import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Member_User from '@/components/Member_User'
import Product from '@/components/Product'
import Buycart from '@/components/Buycart'
import Member_Address from '@/components/Member_Address'
import Buycart_Two from '@/components/Buycart_Two'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Member_User',
      name: 'Member_User',
      component: Member_User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Buycart',
      name: 'Buycart',
      component: Buycart
    },
    {
      path: '/Member_Address',
      name: 'Member_Address',
      component: Member_Address
    },
    {
      path: '/Buycart_Two',
      name: 'Buycart_Two',
      component: Buycart_Two
    }
  ]
})
