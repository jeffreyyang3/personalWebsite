<template>
    
 <!--       <genericDesc v-for="(content, title) in items"
                     v-bind:key="title" :title="title" :content="content"/> -->
    <genericDesc :title="title" :content="content" ></genericDesc>
        
    
</template>

<script>
// @ is an alias to /src
import genericDesc from '@/components/genericDesc.vue'

export default {
    name: 'otherStuff',
    components: {
        genericDesc
    },
    data: function() {
        return {
            title: "Other Stuff",
            content: ["In my spare time, I enjoy skateboarding,\
                    medium -> dark roasted coffee, and most of all, music. ", 
                    "I used to play the piano and violin, but I've been \
                    much more into playing the electric guitar and bass lately. \
                    I appreciate all types of music, classical, country, rock, \
                    metal, rap, and more, although I still have yet to get \
                    into the " + "very".bold() + " heavy metal."
                ]
        }
    }
}
</script>
