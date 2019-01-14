<template>
    <div class="genericDesc">
        <h1 class="gdHeading"> {{ title }} </h1>
        <div v-for="par in content" v-bind:key="par" 
        class="gdContent"> <p>{{ par }} </p>  </div>
        
    </div>
</template>

<script>
    export default {s
        name: "genericDesc",
        props: {
            title: String,
            content: Array
        },
       
       
    }
</script>

