<template>
    <nav class="navBar" :style="getStyle(internal)">
        <router-link v-for="(link,name) in internalLinks" 
        v-bind:key="name" :to="link"> 
        {{ name }}  </router-link> 
        <span id="externalLinks" v-if="!internal">
            <a v-for="(link,name) in externalLinks"
            v-bind:key="name" :href="link" target="_blank"> {{ name }} </a>
        </span>
    </nav>
</template>

<script>
export default {
    name: "navBar",
    props: {
        currentPage: String,
        internalLinks: Object,
        internal: Boolean,
    },
    data: function() {
        return {
            
      
            externalLinks: {
                'GitHub': 'https://github.com/jeffreyyang3',
                'LinkedIn': 'https://www.linkedin.com/in/jeffreyyang3/',

            },

            
        }
    },

   
    methods: {
        getStyle: function(internal){
            if(internal){
                return {
                    fontSize: '78%'
                }
            }
       
        }


    },
    mounted: function(){
        // delete this.links[this.currentPage]
    }



}
</script>



