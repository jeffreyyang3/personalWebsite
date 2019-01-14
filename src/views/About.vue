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
        'About Me': ["For most of my life, I didn't see myself being \
        a programmer. Thankfully, I explored that possibility in college \
        and ended up really liking it. I was drawn to everything \
        (besides some of the math) ",
        "asdf"
        
        ]

      

      }
      
    }
  }
}
</script>
