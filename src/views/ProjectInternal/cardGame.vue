<template>
    <projDesc :title="title" :technologies="technologies"
    :description="description" :hasImage="true"
    :fileName="fileName">
    
    
    
    
    </projDesc>

</template>

<script>

import projDesc from '@/components/projDesc.vue'
export default {
    name: 'cardGame',
    components: {
        projDesc
    },
    data: function(){
        return {
            title: "Cards Against Humanity",
            technologies: "Vue, Django (oTree)",
            description: ["paragraph 1" , "paragraph 2"],
            fileName: 'cardsGif.gif'


        }
    }


}



</script>
