<template>
  <!--       <genericDesc v-for="(content, title) in items"
  v-bind:key="title" :title="title" :content="content"/>-->
  <genericDesc :title="title" :content="content"></genericDesc>
</template>

<script>
// @ is an alias to /src
import genericDesc from "@/components/genericDesc.vue";

export default {
  name: "work",
  components: {
    genericDesc
  },
  data: function() {
    return {
      title: "Work Experience",
      content: [
        "This summer, I'm going to be an intern at " +
          "Poshmark"
            .link("https://poshmark.com")
            .replace(/^<a/, '$& target="_blank"') +
          ", an online clothing marketplace. I'll be an engineering intern\
          on the web applications team, in a full-stack role working with Vue\
          and a mix of Node.js/Rails.",
        "Last summer, I was a software development intern at " +
          "MobLab"
            .link("https://moblab.com")
            .replace(/^<a/, '$& target="_blank"') +
          ", a company that, among other things, makes multiplayer \
                    economics games for universities. I spent my summer \
                    updating the results view for their many games with \
                    a new design language and replacing the charts with \
                    Highcharts. I worked with an older Dojo.js  front end codebase.\
                    Through it, I learned a lot about the lower level DOM \
                    scripting we take for granted with modern JS\
                    frameworks, the power of modern CSS, version control/issue tracking with an Agile \
                    team, responsible code reuse/structure, and much more. \
                    Thanks MobLab!",
        "I also used to work as a programmer for UCSC's LEEPS\
                    (Learning and Experimental Economics Projects) Lab,\
                    where I wrote full stack multiplayer web games\
                    that economics researchers use to conduct research on\
                    on human decision making processes."
      ]
    };
  }
};
</script>
