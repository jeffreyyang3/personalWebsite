<template>
    <div class="about">
        <genericDesc v-for="(content, title) in items"
                     v-bind:key="title" :title="title" :content="content"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import genericDesc from '@/components/genericDesc.vue'

    export default {
        name: 'about',
        components: {
            genericDesc
        },
        data: function(){
            return {
                items:{
                    'About Me': ["I'm a computer science major at UC Santa Cruz. \
                        I love everything about computer science, the emphasis on the discrete, \
                        the software/hardware interaction, and much more. Well, maybe not some of the\
                        math.",

                        "My favorite part of CS/programming is the ease of creating \
                         relative to many other fields. This website aims to display some projects I've made \
                         to try to take advantage of that, as well as to also give you a bit of a look into my life." ,

                        "I currently work as a programmer for UCSC's LEEPS (Learning and Experimental Economics \
                        Projects) Lab, where I write Django-based online multiplayer games that economics researchers \
                        use to conduct research on decision making processes.",
                        "This summer, I'll be interning at " + "MobLab".link("https://moblab.com") + ", a company that \
                        conveniently also makes multiplayer economics games for universities."
                            .replace(/^<a/, '$& target="_blank"'),


                        "On the programming front, I think I'v",

                        "In my spare time, I enjoy skateboarding, medium/dark roasted coffee, and most of all, music. "
                    ]



                }

            }
        }
    }
</script>
