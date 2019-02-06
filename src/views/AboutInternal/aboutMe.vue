<template>
    
 <!--       <genericDesc v-for="(content, title) in items"
                     v-bind:key="title" :title="title" :content="content"/> -->
    <genericDesc :content="content" :title="title"></genericDesc>
        
    
</template>

<script>
// @ is an alias to /src
import genericDesc from '@/components/genericDesc.vue'

export default {
    name: 'aboutMe',
    components: {
        genericDesc
    },
    data: function() {
        return {
            title: "Hi, I'm Jeffrey.",
            content: ["I'm a CS major at UC Santa Cruz. \
                    I love everything about computer science: the \
                    emphasis on the discrete, the software/hardware \
                    interaction, and much more. Well, maybe not some of the \
                    math.",

                    "My favorite part of CS/programming is the ease of \
                    creating relative to many other fields. This website \
                     aims to display some projects I've made to try to \
                      take advantage of that, as well as to also give you\
                    a bit of a look into my life."]
        }
    }
}
</script>
