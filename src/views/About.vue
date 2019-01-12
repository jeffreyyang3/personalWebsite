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
  name: 'home',
  components: {
   
    genericDesc
  },
  data: function(){
    return {
      items:{
        'About Me': "im jeffre aspiring swe",
        'Experience': "leeps lab program man",

      }
      
    }
  }
}
</script>
