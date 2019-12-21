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
        "Outside of school, I've mostly tried to focus on full stack \
        development. I enjoy full stack a lot because I feel that modern web \
        technologies make it relatively easy and fast to create powerful, easily accessible \
        experiences.",
        "I have the most experience with front/back-end JavaScript. Aside from JS being \
        the only language I can use on front-end, I also like it because I really enjoy the \
        FP/OOP blend and general ease of use.",
        "I'm also familiar with Python through my job at UCSC's economics department, and \
        SQL/C++ through coursework.",
        "There's definitely a lot I haven't learned, but I'm excited to also explore new areas. \
        I'm confident I'll pick them up quickly."
      ]
    };
  }
};
</script>
