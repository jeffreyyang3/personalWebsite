<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Me</router-link>
      
    </div> -->
    
    
    
    
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
  font-size: 380%;
  margin-bottom: -.25em
}
#homePage > h2{
  font-size: 180%;
  margin-bottom: -.1em

}
.gdContent{
  text-align: center;
  font-size: 125%;
  max-width: 60ch;
  margin: 0 auto;
  
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
