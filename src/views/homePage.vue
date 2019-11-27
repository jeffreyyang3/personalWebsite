// project description

<template>
  <div id="homePage">
    <h1>Jeffrey Yang</h1>
    <div class="center">
      <!-- <QuickSort /> -->
      <MergeSort ref="ms" v-if="selectedSort === 'Merge Sort'" />
      <QuickSort ref="qs" v-else :numBars="arrayLength" />
      <div class="sliderContainer" ref="arrayLengthMod">
        <input type="range" class="slider" min="70" max="200" v-model.number="arrayLength" />
        <div class="sliderDesc">{{arrayLength}}</div>
      </div>
    </div>
    <select class="sortSelector" v-model="selectedSort">
      <option value="Merge Sort">Merge Sort</option>
      <option value="Quicksort">Quicksort</option>
    </select>
    <!-- <h2 class="desc"> CS Major @ UC Santa Cruz</h2> <br> -->
    <!-- <div id="sort">
      <div v-bind:key="bar" v-bind:style="divClasses(bar)" v-for="bar in array"></div>
    </div>
    <input type="range" min="20" max="100" v-model="delay" class="slider" id="myRange" />
    <br />
    <h3 style="display: inline-block">Delay per step: {{ delay }} ms</h3>
    <div id="resetButton" @click="resetSort">Reset</div>-->
  </div>
</template>

<style>
.sortSelector {
  width: 10em;
}
.center {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.center .sortContainer {
  width: 90%;
  display: flex;
  justify-content: center;
}
#resetButton {
  border-radius: 0.3em;
  display: inline;
  background: #4fc08d;
  padding: 0.35em 0.7em;
  margin-left: 0.6em;
  font-weight: bold;
  border: 1px solid #4fc08d;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

#resetButton:hover {
  background: #f6f6f6;
}
button {
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 0.1em;
  min-width: 6em;
  text-align: center;
  vertical-align: top;
  margin-left: 10px;
}
.slider {
  -webkit-appearance: none;
  width: 30%;
  height: 15px;
  border-radius: 5px;
  background: #d0d0d0;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin-top: 20px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #4fc08d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}
</style>

<script>
import QuickSort from "@/components/QuickSort";

import MergeSort from "@/components/MergeSort";
export default {
  name: "homePage",
  components: {
    QuickSort,
    MergeSort
  },
  data: function() {
    return {
      array: [],
      upper: 0,
      sortDone: false,
      delay: 40,
      selectedSort: "Quicksort",
      arrayLength: 90
    };
  },
  methods: {
    insertionSort: function() {
      setTimeout(
        function timeoutSort(array, i) {
          if (i < array.length) {
            this.arrayStep(array, i);
            setTimeout(timeoutSort.bind(this), this.delay, array, i + 1);
          } else {
            this.sortDone = true;
          }
        }.bind(this),
        this.delay,
        this.array,
        0
      );
      return this.array;
    },

    getNumberBars: function() {
      // primitive media query kinda stuff
      // let width = window.innerWidth;
      let height = window.innerHeight;
      let width = window.innerWidth;
      let bars;
      if (height < width) {
        bars = width * 0.11;
      } else {
        bars = width * 0.3;
      }
      return Math.floor(bars);
    },

    createArray: function(arraySize) {
      this.array = [];
      for (let i = 1; i < arraySize; i++) {
        this.array.push(i);
      }

      this.Shuffle(this.array);
    },
    arrayStep: function(arry, i) {
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
        width: "3px",
        height: `${value * 0.015}em`,
        display: "inline-block",
        //border: ".03em solid black",
        backgroundColor: this.rainbowArray[value - 1],
        //float: 'left',
        verticalAlign: "top"
        // marginTop: 'auto',
      };
    },
    createRainbowArray: function(array) {
      for (let i = 0; i < array.length; i++) {
        let red = this.sin_to_hex(i, 0, array.length); // 0   deg
        let blue = this.sin_to_hex(i, (Math.PI * 2) / 3, array.length); // 120 deg
        let green = this.sin_to_hex(i, (2 * Math.PI * 2) / 3, array.length); // 240 deg
        array[i] = "#" + red + green + blue;
      }
    },
    sin_to_hex: function(i, phase, size) {
      const sin = Math.sin((Math.PI / size) * 2 * i + phase);
      const int = Math.floor(sin * 127) + 128;
      const hex = int.toString(16);

      return hex.length === 1 ? "0" + hex : hex;
    },
    resetSort: function() {
      this.createArray(this.getNumberBars());
      this.rainbowArray = new Array(this.array.length);
      this.createRainbowArray(this.rainbowArray);
      this.insertionSort();
    }
  },
  mounted() {
    // this.resetSort();
  }
};
</script>
