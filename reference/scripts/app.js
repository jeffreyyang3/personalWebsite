function arrayStep(arry,i){
    arry.push()
    var temp = arry[i];
    var j = i - 1;
    while (j >= 0 && arry[j] > temp) {
        arry[j + 1] = arry[j];
        j--;
    }
    arry[j + 1] = temp;
    vm.upper = i
    
    
}
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
colorArry = ['#d50000', '#c51162', '#aa00ff', '#6200ea', '#304ffe', '#2962ff', 
'#0091ea', '#00b8d4', '#00bfa5', '#00c853', '#64dd17', '#aeea00', '#ffd600', '#ffab00', '#ff6d00', '#dd2c00']

sortDone = false
var vm = new Vue({
    el: '#exercise',
    
    data: {

        array: [],  
        upper: 0, 


    },
    

    methods:{
        insertionSort: function(){
            setTimeout(function timeoutSort(array, i) {

                if (i < array.length) {
                    
                    arrayStep(array, i);
                    
                    setTimeout(timeoutSort, 25, array, i + 1);
                    
                }
                else{
                    sortDone = true
                }
            }, 25, this.array, 0);

            

            return this.array;

        },

        createArray: function (arraySize) {
            this.array = []
            for(let i = 1; i < arraySize; i++){ 
                this.array.push(i)
            }
            

            Shuffle(this.array)
            
        },
        
        divClasses: function(value) {
            return {
                //border: '1px solid black',
                width: '5px',
                height: value * .05 + 'em',
                display: 'block',
                border: ".03em solid black",
            
                backgroundColor: this.rainbowArray[value - 1],
       
              
                //backgroundColor: '#FC510B',
                float: 'left',
                marginTop: '0px',
                backgroundColor: this.rainbowArray[value - 1]
            

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
        this.createArray(100);
        this.rainbowArray = new Array(this.array.length)
        this.createRainbowArray(this.rainbowArray)
        setTimeout(function(){
            vm.insertionSort()
        }, 200)
       
        
    }

});














