<template>
  <div class="projects">
    <!--   <projDesc v-for="(data, title) in items"
        :key="title" :title="title"
        :technologies="data.technologies"
    :description="data.description" :path="data.path"/>-->
    <navBar :internalLinks="links" :internal="true" :hasTitle="true" :title="title"></navBar>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src  dfdf
import navBar from "@/components/navBar.vue";

export default {
  name: "projects",
  components: {
    navBar
  },

  data: function() {
    return {
      links: {
        "Personal Website": "/projects/personalWebsite",
        "Cards Against Humanity": "/projects/cardGame",
        "Reddit CLI": "/projects/redditScript"
      },
      title: "Projects:"
    };
  }
};

/*
title: String,
technologies: String,
description: String,
url: String,
path: String, */
</script>
