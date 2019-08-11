import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Member_User from '@/components/Member_User'
import Product from '@/components/Product'
import Shoppingcart from "../components/Shoppingcart";
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
      path: '/Shoppingcart',
      name: 'Shoppingcart',
      component: Shoppingcart
    }
  ]
})
