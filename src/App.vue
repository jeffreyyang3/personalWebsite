<template>
  <div id="app">
    <dankman message1="asasdfdf"></dankman>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import dankman from './components/ex.vue'
export default {
  name: 'app',
  components: {
    dankman,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
