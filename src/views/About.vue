<template>
  <div class="about">
    <!--  <genericDesc v-for="(content, title) in items"
    v-bind:key="title" :title="title" :content="content"/>-->

    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "about",

  components: {
  },
  data: function() {
    return {
      links: {
        General: "/about/aboutMe",
        Programming: "/about/programming",
        "Work Experience": "/about/work",
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
