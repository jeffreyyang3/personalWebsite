<template>
  <projDesc
    :title="title"
    :technologies="technologies"
    :description="description"
    :hasImage="hasImage"
  ></projDesc>
</template>

<script>
import projDesc from "@/components/projDesc.vue";
export default {
  name: "myWebsite",
  components: { projDesc },
  data: function() {
    return {
      title: "Personal Website",
      technologies: "Vue: Single File Components, Router",
      description: [
        " Naturally, my first web project \
                was my personal website. It's come a long way since the " +
          " start"
            .link("https://people.ucsc.edu/~jedyang/oldwebsite/index.html")
            .replace(/^<a/, '$& target="_blank"') +
          ", although I guess that iteration had better\
                performance than this one. My GPA was also better back then.\
                Maybe I should have kept my website like that. Sadly, it's \
                too late for that now. I put too much time into changing it. \
                What are sunk costs?",

        "This website is now a single-page Vue application written \
                almost entirely as Vue components, using Vue-Router\
                to handle navigation. I also used Vue's reactivity to \
                visualize insertion sort under my name. It's an array of \
                numbers represented as HTML divs, using setTimeout to pause \
                the sort after each step so that the array doesn't get \
                sorted too quickly.",
        "N<sup>2</sup> runtime is still basically \
                instant on a small array, but with a delay on \
                each step one can \
                see how quickly that time scales up with slightly longer \
                delays."
      ],
      hasImage: false
    };
  }
};

/*
        title: String,
        technologies: String,
        description: Array,
        path: String,
        hasImage: Boolean,

    */
</script>

<style scoped>
</style>
