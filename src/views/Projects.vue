<template>
    <div class="projects">
     <!--   <projDesc v-for="(data, title) in items"
        :key="title" :title="title"
        :technologies="data.technologies"
        :description="data.description" :path="data.path"/> -->



    </div>
</template>

<script>
// @ is an alias to /src  dfdf
import projDesc from '@/components/projDesc.vue'

export default {
    name: 'projects',
    components: {
    projDesc,


    },

    data: function(){
        return {
            items:{
                "Personal Website": {
                    technologies: "Vue: Single File Components, Router, \
                    string test, HTML5 Canvas",
                    description: ["this is my personal website"]
                },

                "Cards Against Humanity": {

                  path: "cardsGif.gif",
                  technologies: "Vue, Django (oTree)",
                  description: ["example description", "paragraph"],

                },
                

            }

        }
    },

}

    


/*
title: String,
technologies: String,
description: String,
url: String,
path: String, */
</script>
