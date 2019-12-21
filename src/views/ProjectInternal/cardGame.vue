<template>
  <projDesc
    :title="title"
    :technologies="technologies"
    :description="description"
    :hasImage="true"
    :fileName="fileName"
    :hasBorder="true"
    :link="link"
  ></projDesc>
</template>

<script>
import projDesc from "@/components/projDesc.vue";
export default {
  name: "cardGame",
  components: {
    projDesc
  },
  data() {
    return {
      title: "Cards Against Humanity",
      technologies: "Vue, Django",
      description: [
        `A card game heavily based on "Cards Against
            Humanity". I used a Django-based framework called oTree that 
            I use in my work for the Economics department at UCSC.
            It's meant for economics experiments, but I didn't want to
            limit my use of it to that. `,
        `Anyone can create a game session, and their friends can 
            join through links that the game generates. The actual game draws 
            from a text file of Cards Against Humanity cards, but the GIF below 
            shows dummy text for the cards since some of the cards
            aren't safe for work.`,
        "If the game never loads, it's probably because the Heroku free plan database\
             ran out of rows. I don't know how this app manages to exceed the row limit\
             so often. I guess it's an example of one of the drawbacks of heavy abstraction."
      ],
      fileName: "cardsGif.gif",
      link: {
        hasLink: true,
        link: "https://desolate-woodland-61499.herokuapp.com/demo/",
        linkName: "Heroku"
      }
    };
  }

  /*
    

Note: for some reason, only the single use links for each session work if multiple devices are used for a game.



    */
};
</script>
