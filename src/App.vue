<template>
  <div id="app">
    <Header />
    <div class="content">
    <transition name="slide-fade">
      <router-view />
    </transition>

    </div>
    <Footer />
      </div>
</template>
<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100vh;
  margin-left: 8px;
  margin-right: 8px;
  overflow: hidden;
  #header {
    height: 170px;
    position: fixed;
    background-color: #dde7e3;
  }

  .content {
    margin-top: 170px;
    margin-bottom: 100px;
    height: calc(100vh - 250px);
    overflow: scroll;

    // -ms-overflow-style: none; /* IE and Edge */
    // scrollbar-width: none; /* Firefox */
    
  }
  // &::-webkit-scrollbar {
  //   display: none;
  //   background: transparent;

  // }
  #footer {
    height: 100px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>

<script>
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data: function() {
    return {
      links: {
        "About Me": "/about",
        Projects: "/projects",
      },
    };
  },
};
</script>

<style>
body {
  background-color: #dde7e3;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
