<template>
    <nav class="navBar">
        <router-link v-for="(link,name) in internalLinks" 
        v-bind:key="name" :to="link"> 
        {{ name }}  </router-link> 
        <a v-for="(link,name) in externalLinks" 
        v-bind:key="name" :href="link" target="_blank"> {{ name }} </a>
    </nav>
</template>

<script>
    export default {
        name: "navBar",
        props: {
            currentPage: String
        },
        data: function() {
            return {
                internalLinks: {
                 
                    'About': 'about',
                    
                },
                externalLinks: {
                    'GitHub': 'https://github.com/jeffreyyang3',
                    'LinkedIn': 'https://www.linkedin.com/in/jeffreyyang3/',

                }
            }
        },
        computed: {
            

        },
        mounted: function(){
            // delete this.links[this.currentPage]
        }

       
        
    }
</script>

