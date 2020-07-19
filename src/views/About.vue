<template>
  <div class="about">
    <!--  <genericDesc v-for="(content, title) in items"
    v-bind:key="title" :title="title" :content="content"/>-->

    <navBar
      :internalLinks="links"
      :internal="true"
    />

    <transition name="slide-fade">
      <router-view />
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
      links: [
        { name: "general", route: "/about/aboutMe"},
        { name: "Programming", route: "/about/programming"},
        { name: "Professional Experience", route: "/about/work"},
        { name: "Other Stuff", route: "/about/otherStuff"}
      ]
    };
  }
};
</script>

<style scoped>
.about {
  width: 100%;
}
</style>
