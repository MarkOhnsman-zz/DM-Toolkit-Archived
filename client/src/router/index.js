import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NPCGen from '@/components/NPCGen'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: "*",
      redirect: "/"
    },
    //testing route, change later
    {
      path:"/npc-generator",
      name: "NPCGEN",
      component: NPCGen
    }
  ]
})
