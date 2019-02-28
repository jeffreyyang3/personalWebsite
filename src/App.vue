<template>
  <div id="app">
    <homePage></homePage>
    <navBar :internalLinks="links" :internal="false"></navBar>

    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>


<script>
import homePage from "./views/homePage.vue";
import navBar from "./components/navBar.vue";

export default {
  name: "app",
  components: {
    navBar,
    homePage
  },
  data: function() {
    return {
      links: {
        "About Me": "/about",
        Projects: "/projects"
      }
    };
  }
};
</script>


<style>
body {
  background-color: #f6f6f6;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}
nav {
  padding-top: 20px;
  clear: both;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  font-size: 150%;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}

nav a:hover {
  color: #4fc08d;
}

#homePage > h1 {
  font-size: 500%;
  margin-bottom: 0.2em;
}
#homePage > h2 {
  font-size: 180%;
  margin-bottom: -0.1em;
}

.descContent {
  text-align: center;
  font-size: 120%;
  max-width: 50ch;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: transform 1s ease, opacity 1s ease;
}
.slide-fade-leave-active {
  position: absolute;
  transition: transform 0.1s cubic-bezier(1, 0.5, 0.8, 1),
    opacity 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.card {
  transition: all 0.5s;
}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>
