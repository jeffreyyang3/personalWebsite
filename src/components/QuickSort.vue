<template>
  <div class="sortContainer">
    <div class="barContainer">
      <div
        class="bar"
        v-for="(bar, index) in bars"
        :key="`val${bar}i${index}`"
        :style="getStyle(bar)"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.barContainer {
  display: flex;
  flex-direction: row;
}
</style>

<script>
const chroma = require('chroma-js');
export default {
  name: "QuickSort",
  computed: {
    colorArry () {
      return chroma.scale(['#a81816', '#2a0102']).colors(this.numBars)
    }
    // echo: chroma.scale(['#a18816', '#2a0102']).colors(this.numBars)
  },

  methods: {
    doQs() {
      this.shuffle(this.bars);
      this.quickSort(0, this.bars.length - 1);
    },
    getStyle(num) {
      return {
        width: "10px",
        backgroundColor: this.colorArry[num],
        height: `35px`
      };
    },
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      a.push();
      return a;
    },
    swap(i, j) {
      const temp = this.bars[i];
      this.$set(this.bars, i, this.bars[j]);
      this.$set(this.bars, j, temp);
    },
    getPromise(i, j) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.swap(i, j);

          resolve();
        }, this.delay);
      });
    },

    async partition(low, high) {
      const pivot = this.bars[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        if (this.bars[j] < pivot) {
          i++;
          await this.getPromise(i, j);
        }
      }
      // this.swap(i + 1, high);
      await this.getPromise(i + 1, high);
      return i + 1;
    },
    async quickSort(low, high) {
      // console.log("rec call");
      if (low < high) {
        const partitionIndex = await this.partition(low, high);
        if (partitionIndex === "reset") return;
        this.quickSort(low, partitionIndex - 1);
        this.quickSort(partitionIndex + 1, high);
      }
    },
    createRainbowArray: function(array) {
      for (let i = 0; i < array.length; i++) {
        let red = this.sin_to_hex(i, 0, array.length); // 0   deg
        let blue = this.sin_to_hex(i, (Math.PI * 2) / 3, array.length); // 120 deg
        let green = this.sin_to_hex(i, (2 * Math.PI * 2) / 3, array.length); // 240 deg
        array[i] = "#" + red + green + blue;
      }
      return array;
    },
    sin_to_hex: function(i, phase, size) {
      const sin = Math.sin((Math.PI / size) * 2 * i + phase);
      const int = Math.floor(sin * 127) + 128;
      const hex = int.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    },
    getBars: function() {
      return this.shuffle(
        [...new Array(this.numBars ? this.numBars : 100)].map(
          (_, index) => index
        )
      );
    }

  },

  mounted() {
    // await this.partition(0, this.bars.length - 1);
    this.quickSort(0, this.bars.length - 1);

    // const promise = new Promise(function(resolve) {
    //   setTimeout(() => resolve("done"), 1000);
    // });

    // promise.then(() => {
    //   document.getElementById("debug").innerHTML = "resolve";
    //   this.swap(0, this.bars.length - 1);
    // });
  },
  props: {
    numBars: Number
  },
  data: function() {
    return {
      bars: this.getBars(),
      rainbowArray: this.createRainbowArray([...new Array(this.numBars)]),
      delay: 50,
      resetAllowed: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
