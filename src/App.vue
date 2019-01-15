<template>
  <div id="app">

    <homePage></homePage>
    <navBar></navBar>
    
    <transition name="slide-fade">
      <router-view/>
    </transition>
    
  </div>
</template>


<script>
  import homePage from './views/homePage.vue'
  import navBar from './components/navBar.vue'
  
  export default {
    name: "app",
    components: {
      navBar,
      homePage
    }
  }
</script>


<style>
body {
  background-color: #f6f6f6;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

}

#homePage > h1{
  font-size: 600%;
  margin-bottom: .2em;
}
#homePage > h2{
  font-size: 180%;
  margin-bottom: -.1em

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
