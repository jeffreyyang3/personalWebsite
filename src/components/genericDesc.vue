<template>
  <div class="desc">
    <h1 class="descHeading">{{ title }}</h1>
    <div v-for="par in content" v-bind:key="par" class="descContent">
      <p v-html="par"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "genericDesc",
  props: {
    title: String,
    content: Array
  }
};
</script>

<style scoped>
.desc {
  width: 100%;
}
</style>
