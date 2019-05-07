<template>
  <div class="about">
    <!--  <genericDesc v-for="(content, title) in items"
    v-bind:key="title" :title="title" :content="content"/>-->
    <navBar :internalLinks="links" :internal="true" :hasTitle="hasTitle" :title="title"></navBar>

    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from "@/components/navBar.vue";

export default {
  name: "about",

  components: {
    navBar
  },
  data: function() {
    return {
      links: {
        General: "/about/aboutMe",
        Programming: "/about/programming",
        "Other Stuff": "/about/otherStuff"
      },
      title: "About Me:",
      hasTitle: true
    };
  }
};
</script>

<style scoped>
.about {
  width: 100%;
}
</style>
