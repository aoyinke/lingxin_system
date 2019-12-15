import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import login from '../components/login.vue'
import home from '../components/home.vue'
=======
import Home from '../views/Home.vue'

>>>>>>> a5b846e31b530d198b00bdb2dbd5ccde37889eb6
Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:"",
    redirect:"/login"
  },
  {
    path:"/home",
    name:"home",
    component: home
=======
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
>>>>>>> a5b846e31b530d198b00bdb2dbd5ccde37889eb6
  }
]

const router = new VueRouter({
  routes
})

export default router
