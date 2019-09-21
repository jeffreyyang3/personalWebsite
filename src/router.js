import Vue from "vue";
import Router from "vue-router";

import about from "@/views/About.vue";
import projects from "@/views/Projects.vue";
import aboutMe from "@/views/AboutInternal/aboutMe.vue";
import otherStuff from "@/views/AboutInternal/otherStuff.vue";
import work from "@/views/AboutInternal/work.vue";

import programming from "@/views/AboutInternal/programming.vue";
import myWebsite from "@/views/ProjectInternal/myWebsite.vue";
import cardGame from "@/views/ProjectInternal/cardGame.vue";
import redditScript from "@/views/ProjectInternal/redditScript.vue";

import compareCards from "@/views/ProjectInternal/compareCards.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about,
      children: [
        { path: "/about/aboutMe", name: "aboutMe", component: aboutMe },
        {
          path: "/about/otherStuff",
          name: "otherStuff",
          component: otherStuff
        },
        {
          path: "/about/work",
          name: "work",
          component: work
        },
        {
          path: "/about/programming",
          name: "programming",
          component: programming
        }
      ]
    },
    {
      path: "/projects",
      name: "projects",
      component: projects,
      children: [
        {
          path: "/projects/personalWebsite",
          name: "personalWebsite",
          component: myWebsite
        },

        {
          path: "/projects/compareCards",
          name: "compareCards",
          component: compareCards
        },
        { path: "/projects/cardGame", name: "cardGame", component: cardGame },
        {
          path: "/projects/redditScript",
          name: "redditScript",
          component: redditScript
        }
      ]
    }
  ]
});
