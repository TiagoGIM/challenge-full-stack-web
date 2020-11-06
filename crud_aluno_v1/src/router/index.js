import Vue from 'vue'
import VueRouter from 'vue-router'
import FindStudent from '@/views/FindStudent.vue'
import LandingPage from '@/views/LandingPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  { path: "*",
    component: PageNotFound 
  },
  {
    path: '/find-student',
    name: 'FindStudent',
    component: FindStudent
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  { path: '/register/:student',
    name:'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    props: true },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
