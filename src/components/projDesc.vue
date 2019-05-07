// project description

<template>
  <div class="projectDesc">
    <h3>
      {{ title }}
      <a v-if="link.hasLink" :href="link.link" target="_blank">
        -
        <span>{{link.linkName}}</span>
      </a>
    </h3>
    <img
      v-if="hasImage"
      :src="getImgUrl(fileName)"
      alt="supposed2be image here"
      :style="getImgStyle()"
    >
    <h4>Technologies used: {{ technologies }}</h4>

    <div v-for="par in description" :key="par" class="descContent">
      <p v-html="par"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "projDesc",
  props: {
    title: String,
    technologies: String,
    description: Array,
    fileName: String,
    hasImage: Boolean,
    hasBorder: Boolean,
    link: Object
  },

  methods: {
    getImgUrl: function() {
      if (this.hasImage) {
        return require("@/assets/images/" + this.fileName);
      }
    },
    getImgStyle: function() {
      let base = {
        maxHeight: "550px",
        maxWidth: "550px",
        borderRadius: "4px",
        border: "none"
      };
      if (this.hasBorder) {
        base.border = "1px solid black";
        return base;
      }
      return base;
    }
  }
};
</script>


<style scoped>
.projectDesc {
  width: 100%;
}
a:-webkit-any-link {
  text-decoration: none;
}
img {
  max-height: 550px;
  max-width: 550px;
  border-radius: 4px;
  border: 1px solid black;
}
</style>
