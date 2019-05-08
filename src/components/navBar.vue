<template>
  <nav class="navBar" :style="getStyle(internal)">
    <!--     <transition-group name="slide-fade"> -->
    <a v-if="hasTitle">
      <strong>{{ title }}</strong>
    </a>
    <router-link
      v-for="(link,name) in tempLinks"
      :key="link"
      :to="link"
      @click.native="setLinks(name)"
    >{{ name }}</router-link>

    <!--    </transition-group> -->
    <span id="externalLinks" v-if="!internal">
      <a v-for="(link,name) in externalLinks" :key="link" :href="link" target="_blank">{{ name }}</a>
    </span>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: {
    currentPage: String,
    internalLinks: Object,
    internal: Boolean,
    hasTitle: Boolean,
    title: String
  },

  data: function() {
    return {
      externalLinks: {
        Resume: "./resume_jeffreyYang.pdf",
        GitHub: "https://github.com/jeffreyyang3",
        LinkedIn: "https://www.linkedin.com/in/jeffreyyang3/"
      },

      tempLinks: this.internalLinks
    };
  },

  methods: {
    getStyle: function(internal) {
      if (internal) {
        return {
          fontSize: "78%"
        };
      }
    },

    setLinks: function(current) {
      this.intermediate = JSON.parse(JSON.stringify(this.internalLinks));
      delete this.intermediate[current];
      this.tempLinks = this.intermediate;
    }
  },
  mounted: function() {
    // delete this.links[this.currentPage]
  }
};
</script>

<style scoped>
.navBar {
  width: max-content;
  margin: auto;
}
</style>


