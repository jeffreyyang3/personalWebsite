<template>
    <projDesc :title="title" :technologies="technologies"
    :description="description" :hasImage="hasImage">

    </projDesc>
    
</template>

<script>
    import projDesc from "@/components/projDesc.vue"
    export default {
        name: "myWebsite",
        components: {projDesc},
        data: function() {
            return {
                title: "Personal Website",
                technologies: "Vue: Single File Components, Router",
                description: ['paragraf 1', 'paragraf 2'],
                hasImage: false,
            }
        }


    }


    /*
        title: String,
        technologies: String,
        description: Array,
        path: String,
        hasImage: Boolean,

    */
</script>

<style scoped>

</style>