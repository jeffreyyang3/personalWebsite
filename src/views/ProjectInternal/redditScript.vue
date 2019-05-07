<template>
  <projDesc
    :title="title"
    :technologies="technologies"
    :description="description"
    :hasImage="true"
    :fileName="fileName"
    :hasBorder="true"
    :hasLink="true"
    :link="link"
  ></projDesc>
</template>

<script>
import projDesc from "@/components/projDesc.vue";
export default {
  name: "redditScript",
  components: {
    projDesc
  },
  data: function() {
    return {
      title: "Reddit CLI",
      technologies: "Python: urllib3, urllib, textwrap, json",
      description: [
        `This is a Python script for browsing Reddit through
        the command line. With this script, one can continually 
        browse Reddit, using much less bandwidth than 
        the normal website, and most importantly looking much more
        productive since browsing is probably going to happen in
        a terminal window.`,
        `This was also the first time I used recursion in a non-academic
        setting. The script uses a simple recursive procedure to display
        and properly indent comments.`
      ],
      fileName: "redditGif.gif",
      link: "https://github.com/jeffreyyang3/redditScript"
    };
  }

  /*
    

Note: for some reason, only the single use links for each session work if multiple devices are used for a game.



    */
};
</script>
