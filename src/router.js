import Vue from 'vue'
import Router from 'vue-router'

import about from "@/views/About.vue"
import projects from "@/views/Projects.vue"



Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: about
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects 

    }


  ]
})
