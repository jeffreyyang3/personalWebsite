// project description

<template>
    <div id="homePage">
        <h1> Jeffrey Yang</h1> 
        <!-- <h2 class="desc"> CS Major @ UC Santa Cruz</h2> <br> -->
        <div id="sort">
		<div v-bind:key="bar"
             v-bind:style="divClasses(bar)"
             v-for="bar in array"> </div>
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
                    if (i < array.length){
                        this.arrayStep(array, i);
                        setTimeout(timeoutSort.bind(this), 10, array, i + 1);
                    }
                    else{
                        this.sortDone = true
                    }
                }.bind(this), 10, this.array, 0);
                return this.array;
        },

        createArray: function (arraySize) {
            this.array = [];
            for(let i = 1; i < arraySize; i++){ 
                this.array.push(i)
            }
            

            this.Shuffle(this.array)
            
        },
        arrayStep: function(arry,i){
            arry.push();
            const temp = arry[i];
            let j = i - 1;
            while (j >= 0 && arry[j] > temp) {
                arry[j + 1] = arry[j];
                j--;
            }
            arry[j + 1] = temp;
    
        },

        Shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },
        
        divClasses: function(value) {
            return {
           
                width: '2px',
                height: `${value * .015}em`,
                display: 'inline-block',
                //border: ".03em solid black",
                backgroundColor: this.rainbowArray[value - 1],
                //float: 'left',
                verticalAlign: 'top',
                // marginTop: 'auto',
                
            }
            
        },
        createRainbowArray: function(array){
            for (let i = 0; i < array.length; i++) {
                let red   = this.sin_to_hex(i, 0 , array.length); // 0   deg
                let blue  = this.sin_to_hex(i, Math.PI * 2/3, array.length); // 120 deg
                let green = this.sin_to_hex(i, 2 * Math.PI * 2/3, array.length); // 240 deg
                array[i] = "#"+ red + green + blue;
              }
        },
        sin_to_hex: function(i, phase, size) {
            const sin = Math.sin(Math.PI / size * 2 * i + phase);
            const int = Math.floor(sin * 127) + 128;
            const hex = int.toString(16);
          
            return hex.length === 1 ? "0"+hex : hex;
        }

    },
    mounted(){
        this.createArray(200);
        this.rainbowArray = new Array(this.array.length)
        this.createRainbowArray(this.rainbowArray)
        setTimeout(()=>{
            this.insertionSort()
        }, 200)
       
        
    },
  }
 
</script>
