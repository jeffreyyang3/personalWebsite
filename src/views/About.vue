<template>
    <div class="about">
    
      <!--  <genericDesc v-for="(content, title) in items"
                     v-bind:key="title" :title="title" :content="content"/> -->


            <navBar :internalLinks="links" :internal="true"></navBar>

        <transition name="slide-fade">
            <router-view/>
        </transition>




        
    </div>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navBar.vue';

export default {
    name: 'about',
    components: {
        navBar
    },
    data: function() {
        return {
            links: {
                'General': '/about/aboutMe',
                'Programming': '/about/programming',
                'Other Stuff': '/about/otherStuff',
            }
        }
    }
}
</script>

<style scoped>
  .about {
    margin: auto;
    width: max-content;
  }
</style>
