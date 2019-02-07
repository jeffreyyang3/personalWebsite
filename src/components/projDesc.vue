// project description

<template>
    <div class="projectDesc">
        <h3> {{ title }} </h3>
        <img v-if="hasImage" 
        :src="getImgUrl(fileName)" 
        alt="supposed2be image here">
        <h4> Technologies used: {{ technologies }} </h4>

        <div v-for="par in description" :key="par"
        class="descContent">
            <p v-html="par"> </p> 
        </div>
                
        

    </div>
</template>

<script>
export default {
    name: "projDesc",
    props: {
        title: String,
        technologies: String,
        description: Array,
        fileName: String,
        hasImage: Boolean,
    },
    methods: {
        getImgUrl: function(name){
            if(this.hasImage){
                return require('@/assets/images/' + name)
            }
        
        },

    },
}
</script>


<style scoped>
img{
    max-height: 550px;
    max-width: 550px;
    border-radius: 4px;
    border: 1px solid black;
}







</style>
