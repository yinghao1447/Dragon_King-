import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginFrom.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
