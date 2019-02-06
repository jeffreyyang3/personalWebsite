import Vue from "vue";
import Router from "vue-router";

import about from "@/views/About.vue";
import projects from "@/views/Projects.vue";
import aboutMe from "@/views/AboutInternal/aboutMe.vue";
import otherStuff from "@/views/AboutInternal/otherStuff.vue";
import programming from "@/views/AboutInternal/programming.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: about,
      children: [

        {path: '/aboutMe', component: aboutMe},
        {path: '/otherStuff', name: "otherStuff", component: otherStuff},
        {path: '/programming', name: "programming", component: programming},


      ]
    },
    {
      path: "/projects",
      name: "projects",
      component: projects
    }
  ]
});
