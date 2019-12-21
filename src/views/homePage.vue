<template>
  <div id="homePage">
    <h1>Jeffrey Yang</h1>

    <div class="center">
      <div class="algContainer">
        <MergeSort ref="ms" :numBars="arrayLength" v-if="selectedSort === 'Merge Sort'" />
        <QuickSort ref="qs" v-else :numBars="arrayLength" />
      </div>
      <div class="sortSelector">
        <div
          class="sortOption"
          v-on:click="selectedSort = 'Quicksort'"
          :class="{selected: selectedSort === 'Quicksort'}"
        >Quicksort</div>
        <div
          class="sortOption"
          v-on:click="selectedSort = 'Merge Sort'"
          :class="{selected: selectedSort === 'Merge Sort'}"
        >Merge Sort</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.algContainer {
  min-height: 80px;
}
.sortSelector {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  .sortOption {
    margin: 3px;
    font-size: 150%;
    font-weight: bold;
    cursor: pointer;
  }
  .selected {
    color: #4fc08d;
  }
}

.center {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center .sortContainer {
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
import navBar from "@/components/navBar";
export default {
  name: "homePage",
  components: {
    QuickSort,
    MergeSort,
    navBar
  },
  data: function() {
    return {
      array: [],
      upper: 0,
      sortDone: false,
      delay: 40,
      selectedSort: "Quicksort",
      arrayLength: this.getNumberBars()
    };
  },
  methods: {
    getNumberBars: function() {
      // primitive media query kinda stuff
      // let width = window.innerWidth;
      let height = window.innerHeight;
      let width = window.innerWidth;
      let bars;
      if (height < width) return Math.floor(width * 0.09);
      else return Math.floor(width * 0.17);
    },

    createArray: function(arraySize) {
      this.array = [];
      for (let i = 1; i < arraySize; i++) {
        this.array.push(i);
      }

      this.Shuffle(this.array);
    }
  },
  mounted() {
    // this.resetSort();
  }
};
</script>
