<template>
  <div class="sortContainer">
    <div class="barContainer">
      <div
        class="bar"
        v-for="(bar, index) in bars"
        :key="`i${index}val${bar}`"
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
export default {
  name: "MergeSort",
  props: {
    numBars: Number
  },
  methods: {
    async mergeSort(l, r) {
      if (l < r) {
        const m = Math.floor((l + r) / 2);
        await this.mergeSort(l, m);
        await this.mergeSort(m + 1, r);
        await this.merge(l, m, r);
      }
    },
    async merge(start, mid, end) {
      const out = [];
      let i = start;
      let j = mid + 1;
      while (i <= mid && j <= end) {
        const left = this.bars[i];
        const right = this.bars[j];
        if (left < right) {
          out.push(left);
          i++;
        } else {
          out.push(right);
          j++;
        }
      }
      while (i <= mid) {
        out.push(this.bars[i]);
        i++;
      }
      while (j <= end) {
        out.push(this.bars[j]);
        j++;
      }

      for (let i = 0; i < out.length; i++) {
        if (i % 3 !== 0) {
          const promise = new Promise(resolve => {
            setTimeout(() => {
              this.$set(this.bars, start + i, out[i]);
              resolve();
            }, 15);
          });
          await promise;
        } else {
          this.$set(this.bars, start + i, out[i]);
        }

        //   this.$set(this.bars, start + i, out[i]);
        // }
      }
    },
    getStyle(num) {
      return {
        width: "5px",
        backgroundColor: this.rainbowArray[num],
        marginBottom: "10px",
        height: `${Math.floor(num * 0.7)}px`
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

    createRainbowArray: function(length) {
      const sin_to_hex = (i, phase, size) => {
        const sin = Math.sin((Math.PI / size) * 2 * i + phase);
        const int = Math.floor(sin * 127) + 128;
        const hex = int.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return [...new Array(length)].map((_, i) => {
        const red = sin_to_hex(i, 0, length); // 0   deg
        const blue = sin_to_hex(i, (Math.PI * 2) / 3, length); // 120 deg
        const green = sin_to_hex(i, (2 * Math.PI * 2) / 3, length); // 240 deg
        return "#" + red + green + blue;
      });
    }
  },

  mounted() {
    this.mergeSort(0, this.bars.length - 1);
  },
  data: function() {
    return {
      bars: this.shuffle(
        [...new Array(this.numBars || 100)].map((_, index) => index)
      ),
      rainbowArray: this.createRainbowArray(this.numBars || 100),
      delay: 10,
      resetAllowed: false
    };
  }
};
</script>
