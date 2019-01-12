// project description

<template>
    <div id="homePage">
        <h1> Jeffrey Yang</h1> 
        <h2 class="desc"> CS Major @ UC Santa Cruz</h2> <br>
      
      <!-- <ul v-for="bar in array" 
     
       v-bind:key="bar">
        v-bind:style="{ margin: '45px', marginTop: '-30px'}" -->
        <div id="sort">
		<div v-for="bar in array" 
     
       v-bind:key="bar" v-bind:style="divClasses(bar)"> </div>
       </div> 
	    
    </div>
</template>

<script>
    
    export default {
        name: "homePage",
        data: function(){
            return{
                array: [],
                upper: 0,
                sortDone: false
            }
        },
        methods:{
            insertionSort: function(){
                setTimeout(function timeoutSort(array, i) {

                    if (i < array.length) {
                   
                        this.arrayStep(array, i);
                        
                        setTimeout(timeoutSort.bind(this), 25, array, i + 1);
                        
                    }
                    else{
                        this.sortDone = true
                    }
                }.bind(this), 25, this.array, 0);

                

                return this.array;

        },

        createArray: function (arraySize) {
            this.array = []
            for(let i = 1; i < arraySize; i++){ 
                this.array.push(i)
            }
            

            this.Shuffle(this.array)
            
        },
        arrayStep: function(arry,i){
            arry.push()
            var temp = arry[i];
            var j = i - 1;
            while (j >= 0 && arry[j] > temp) {
                arry[j + 1] = arry[j];
                j--;
            }
            arry[j + 1] = temp;
    
        },

        Shuffle(o) {
            for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        },
        
        divClasses: function(value) {
            return {
           
                width: '5px',
                height: value * .03 + 'em',
                display: 'block',
                //border: ".03em solid black",        
                backgroundColor: this.rainbowArray[value - 1],
                float: 'left',
                //marginTop: '0px',
                
            }
            
        },
        createRainbowArray: function(array){
            for (let i = 0; i < array.length; i++) {
                let red   = this.sin_to_hex(i, 0 * Math.PI * 2/3, array.length); // 0   deg
                let blue  = this.sin_to_hex(i, 1 * Math.PI * 2/3, array.length); // 120 deg
                let green = this.sin_to_hex(i, 2 * Math.PI * 2/3, array.length); // 240 deg
                array[i] = "#"+ red + green + blue;
              }
        },
        sin_to_hex: function(i, phase, size) {
            var sin = Math.sin(Math.PI / size * 2 * i + phase);
            var int = Math.floor(sin * 127) + 128;
            var hex = int.toString(16);
          
            return hex.length === 1 ? "0"+hex : hex;
        }

    },
    mounted(){
        this.createArray(120);
        this.rainbowArray = new Array(this.array.length)
        this.createRainbowArray(this.rainbowArray)
        setTimeout(()=>{
            this.insertionSort()
        }, 200)
       
        
    },
  }
 
</script>