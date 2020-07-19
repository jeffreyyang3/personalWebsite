<template>
  <nav class="navBar" :style="getStyle(internal)">
    <!-- <transition-group name="slide-fade"> -->
    <a v-if="hasTitle">
      <strong>{{ title }}</strong>
    </a>
    <!--    </transition-group> -->
    <template v-if="!internal">
      <a
        v-for="(link, idx) in externalLinks"
        :key="idx"
        :href="link.href"
        target="_blank"
      >
        {{ idx + 1 }} {{ link.name }}
      </a>
    </template>
    <router-link
      v-for="(link, idx) in internalLinks"
      :key="JSON.stringify(link)"
      :to="link.route"
      >{{ idx + externalLinks.length }} {{ link.name }} </router-link
    >
  </nav>
</template>
<style lang="scss">
.navBar {
  margin-top: 4px;
  a {
    text-decoration: none;
    color: black;
    font-weight: 550;
    text-transform: uppercase;
  }
}
</style>

<script>
export default {
  name: "navBar",
  props: {
    currentPage: String,
    internalLinks: {
      type: Array,
      default: () => [],
    },
    internal: Boolean,
    hasTitle: Boolean,
    title: String,
  },
  computed: {
    allLinks() {
      return this.internal
        ? this.interalLinks
        : [...this.externalLinks, ...this.internalLinks];
    },
  },
  data: function() {
    return {
      externalLinks: [
        { name: "resume", href: "./resume_jeffreyYang.pdf" },
        { name: "github", href: "https://github.com/jeffreyyang3" },
        { name: "linkedin", href: "https://linkedin.com/in/jeffreyyang3" },
      ],
    };
  },

  methods: {
    getStyle: function(internal) {
      if (internal) {
        return {
          fontSize: "78%",
        };
      }
    },

    setLinks: function(current) {
      this.intermediate = JSON.parse(JSON.stringify(this.internalLinks));
      delete this.intermediate[current];
      this.tempLinks = this.intermediate;
    },
  },
  mounted: function() {
    // delete this.links[this.currentPage]
  },
};
</script>

<style scoped></style>
