<template>
    <div class="genericDesc">
        <h1 class="gdHeading"> {{ title }} </h1>
        <div v-for="par in content" v-bind:key="par" 
        class="gdContent"> <p v-html="par"></p>  </div>
        
    </div>
</template>

<script>
    export default {
        name: "genericDesc",
        props: {
            title: String,
            content: Array
        },
       
       
    }
</script>

<style>
    .gdContent{
        text-align: center;
        font-size: 120%;
        max-width: 50ch;
        margin: 0 auto;
    }
</style>

