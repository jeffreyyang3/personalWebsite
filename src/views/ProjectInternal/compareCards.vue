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
  name: "compareCards",
  components: {
    projDesc
  },
  data() {
    return {
      title:
        '<a class= "websiteLink" target="_blank" href="https://comparecards4.me">comparecards4.me</a>',
      technologies: "Vue, Vuex",
      description: [
        `Lately, I've been really into maximizing credit card rewards. It's become
        a hobby for me. Sadly, I never had the patience to calculate rewards myself.
        So I spent way more time than I would have spent calculating making this web 
        app. With it, anyone can input their spending and see how much money each of
        40+ popular credit cards can net them in rewards.  `,
        `I used Vuex to manage state and reactivity with the many components that make
        up the site. Vuex was really helpful for creating the site in a very modularized
        way. I also wrote and styled all the UI components other than a few dropdown selectors myself.`,
        `Originally I was going to give people the option of signing in to Plaid to get
        their spend pre-filled. I didn't end up doing that because people would have
        security concerns (very understandable), and I didn't have time. But the code 
        to accomplish that was working and it's in the repo. That functionality was handled
        with an Express back-end, using Docker and nginx to serve the front and back
        end without CORS issues.`
      ],
      fileName: "compareCards.gif",
      link: {
        hasLink: true,
        link: "https://github.com/jeffreyyang3/creditCardCompare",
        linkName: "GitHub"
      }
    };
  }
};
</script>
