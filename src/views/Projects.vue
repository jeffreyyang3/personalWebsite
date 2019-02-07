<template>
    <div class="projects">
     <!--   <projDesc v-for="(data, title) in items"
        :key="title" :title="title"
        :technologies="data.technologies"
        :description="data.description" :path="data.path"/> -->

    <navBar :internalLinks="links" :internal="true"></navBar>
    <transition name="slide-fade">
            <router-view/>
    </transition>
    



    </div>
</template>

<script>
// @ is an alias to /src  dfdf
import projDesc from '@/components/projDesc.vue'
import navBar from '@/components/navBar.vue'

export default {
    name: 'projects',
    components: {
    projDesc,
    navBar


    },

    data: function(){
        return {
            links: {
                'My Website': '/projects/personalWebsite',
                
            },


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
