<template>
    <nav class="navBar" :style="getStyle(internal)">
        <router-link v-for="(link,name) in tempLinks"
        :key="name" :to="link" @click.native="setLinks(name)">
        {{ name }} </router-link>
        <span id="externalLinks" v-if="!internal">
            <a v-for="(link,name) in externalLinks"
            :key="name" :href="link" target="_blank"> {{ name }} </a>
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

            tempLinks: this.internalLinks,



            
        }
    },



   
    methods: {
        getStyle: function(internal){
            if(internal){
                return {
                    fontSize: '78%'
                }
            }
       
        },

        setLinks: function(current){
            this.tempLinks = JSON.parse(JSON.stringify(this.internalLinks));
            delete this.tempLinks[current]
        },


    },
    mounted: function(){
        // delete this.links[this.currentPage]
    }



}
</script>



