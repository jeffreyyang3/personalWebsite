<template>
  <projDesc
    :title="title"
    :technologies="technologies"
    :description="description"
    :hasImage="hasImage"
    :fileName="fileName"
    :hasBorder="hasBorder"
    :link="link"
  ></projDesc>
</template>

<script>
import projDesc from "@/components/projDesc.vue";
export default {
  name: "myWebsite",
  components: { projDesc },
  data() {
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
                too late for that now. I've already put too much time into changing my website. \
                What are sunk costs?",

        "This website is now a single-page Vue application written \
                almost entirely as Vue components, using Vue-Router\
                to handle navigation. I also used Vue's reactivity to \
                visualize some sorting algorithms under my name. It's an array of \
                numbers represented as HTML divs, using setTimeout,\
                promises, and async-await to pause \
                the sort correctly after each step so that the array doesn't get \
                sorted too quickly."
      ],
      hasImage: true,
      hasBorder: false,
      fileName: "vue.png",
      link: {
        hasLink: true,
        linkName: "GitHub",
        link: "https://github.com/jeffreyyang3/personalwebsite"
      }
    };
  }
};
</script>

<style scoped>
</style>
