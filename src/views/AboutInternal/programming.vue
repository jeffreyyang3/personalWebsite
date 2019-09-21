<template>
  <!--       <genericDesc v-for="(content, title) in items"
  v-bind:key="title" :title="title" :content="content"/>-->
  <genericDesc :title="title" :content="content"></genericDesc>
</template>

<script>
// @ is an alias to /src
import genericDesc from "@/components/genericDesc.vue";

export default {
  name: "programming",
  components: {
    genericDesc
  },
  data: function() {
    return {
      title: "Programming",
      content: [
        `On my own, I've been trying to learn full stack development.
         I know, real unique. But it's popular for many good reasons.
         For me, I enjoy web a lot because the speed at which you can
         make something cool that also looks nice is unmatched in most cases
         when comparing it to other languages, frameworks and runtimes. 
         `,
        `I also really like JavaScript. People hate on it a lot, but I think modern
         language features and innovative new community developments have helped it
         shed a lot of the bad parts that come with the language previously only running on
         low tech web browsers. I've also found the general style of the language
         fun and intuitive to use, especially the emphasis on functions.`,
        "While I've put basically all of my time so far into learning \
         web development, I'm open to exploring other avenues as well. \
         I'm confident I'll be able to pick them up quickly."
      ]
    };
  }
};
</script>
