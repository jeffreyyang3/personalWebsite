// project description

<template>
    <div class="projectDesc">
        <h2> {{ title }} </h2>
        <img :src="getImgUrl(path)">
        <h4> Technologies used: {{ technologies }} </h4>
        <p v-for="par in description" :key="par"> {{ par }} </p>
        

    </div>
</template>

<script>
export default {
    name: "projDesc",
    props: {
        title: String,
        technologies: String,
        description: Array,
        path: String,
    },
    methods: {
        getImgUrl(fileName){
            if(fileName === undefined){
                return
            }
            else{
                return require('@/assets/images/' + fileName);

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
