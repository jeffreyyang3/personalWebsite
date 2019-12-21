<template>
  <!--       <genericDesc v-for="(content, title) in items"
  v-bind:key="title" :title="title" :content="content"/>-->
  <genericDesc :title="title" :content="content"></genericDesc>
</template>

<script>
// @ is an alias to /src
import genericDesc from "@/components/genericDesc.vue";

export default {
  name: "otherStuff",
  components: {
    genericDesc
  },
  data: function() {
    return {
      title: "Other Stuff",
      content: [
        "In my spare time, I enjoy scrolling through \
      used car listings, playing the guitar/bass, skateboarding, and \
      lying in my bed scrolling through Reddit on my phone. It's a pretty good life."
      ]
    };
  }
};
</script>
