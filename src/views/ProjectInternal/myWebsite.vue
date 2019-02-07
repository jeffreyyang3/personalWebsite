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
                description: [" Naturally, my first web project \
                was my personal website. It's come a long way since \
                (placeholder), although I guess that iteration had better\
                performance than this one.    ", 
                
                
                'paragraf 2'],
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
