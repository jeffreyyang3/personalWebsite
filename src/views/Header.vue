<template>
  <div id="header">
    <h1 class="name">Jeffrey Yang</h1>
    <div class="standardSeparator"></div>
    <div class="algContainer">
      <MergeSort ref="ms" :numBars="arrayLength" v-if="selectedSort === 'Merge Sort'" />
      <QuickSort ref="qs" v-else :numBars="arrayLength" />
      <div class="title">Software Engineer</div>
    </div>
    <navBar :internalLinks='internalLinks' :internal='false'/>

    <!-- <div>
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
    </div> -->
  </div>
</template>

<style lang="scss">

.name {
  font-size: 60px;
  margin-bottom: 8px;
  margin-top: 8px;
}
.title {
  font-size: 35px;
  font-weight: bold;
  margin-left: 6px;
}

.name, .title {
  user-select: none;
}
.standardSeparator {
  background-color: black;
  height: 2px;
  width: 100%;
  margin-bottom: 8px;

}

.algContainer {
  display: flex;
}
</style>

<script>
import QuickSort from "@/components/QuickSort";
import navBar from "@/components/navBar";

import MergeSort from "@/components/MergeSort";
export default {
  name: "Header",
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
      arrayLength: 30,
      internalLinks: [
        {name: "projects", route: "/projects"},
        {name: "about me", route: "/about"}
      ]
    };
  },
  methods: {
    getNumberBars: function() {
      let height = window.innerHeight;
      let width = window.innerWidth;
      if (height < width) return Math.floor(window.innerWidth / 3 / 5);
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
