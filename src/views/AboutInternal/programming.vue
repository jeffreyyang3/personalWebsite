<template>
    
 <!--       <genericDesc v-for="(content, title) in items"
                     v-bind:key="title" :title="title" :content="content"/> -->
    <genericDesc :title="title" :content="content" ></genericDesc>
        
    
</template>

<script>
// @ is an alias to /src
import genericDesc from '@/components/genericDesc.vue'

export default {
    name: 'programming',
    components: {
        genericDesc
    },
    data: function() {
        return {
            title: "Programming",
            content: [ "I currently work as a programmer for UCSC's LEEPS\
                    (Learning and Experimental Economics Projects) Lab,\
                     where I write Django-based multiplayer web games\
                    that economics researchers use to conduct research on\
                    on human decision making processes.",
                    "This summer, I'll be interning at " + 
                    "MobLab".link("https://moblab.com")
                    .replace(/^<a/, '$& target="_blank"') + 
                    ", a company that conveniently also makes multiplayer \
                    economics games for universities.",

                    "On the programming front, I've mostly tried to learn \
                    full stack web development, using frameworks like Vue.js, \
                    Node.js, and Django. I really enjoy web development, but \
                    I'm also open to exploring any other avenues. I'm confident \
                    that I'll be able to pick them up quickly."]
        }
    }
}
</script>
