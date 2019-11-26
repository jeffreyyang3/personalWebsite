<template>
  <div class="hello">
    <h1 id="debug">no output</h1>
    <div class="barContainer">
      <div
        class="bar"
        v-for="bar in bars"
        :key="bar"
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
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    getStyle(num) {
      return {
        width: "5px",
        backgroundColor: "red",
        marginBottom: "10px",
        height: num + "px"
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
      return a;
    },
    swap(i, j) {
      const temp = this.bars[i];
      this.$set(this.bars, i, this.bars[j]);
      this.$set(this.bars, j, temp);
    },
    async partition(low, high) {
      const pivot = this.bars[high];
      let i = low - 1;
      const getPromise = (i, j) => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.swap(i, j);
            resolve();
          }, 20);
        });
      };

      for (let j = low; j <= high - 1; j++) {
        if (this.bars[j] < pivot) {
          i++;
          await getPromise(i, j);
        }
      }
      // this.swap(i + 1, high);
      await getPromise(i + 1, high);
      return i + 1;
    },
    async qs(low, high) {
      console.log("rec call");
      // console.log("rec call");
      console.log(`low is ${low} high is ${high}`);
      if (low < high) {
        const partitionIndex = await this.partition(low, high);
        await this.qs(low, partitionIndex - 1);
        await this.qs(partitionIndex + 1, high);
      }
      console.log("array is ", this.bars);
    }
  },

  async mounted() {
    // await this.partition(0, this.bars.length - 1);
    await this.qs(0, this.bars.length - 1);

    // const promise = new Promise(function(resolve) {
    //   setTimeout(() => resolve("done"), 1000);
    // });

    // promise.then(() => {
    //   document.getElementById("debug").innerHTML = "resolve";
    //   this.swap(0, this.bars.length - 1);
    // });
  },
  data: function() {
    return {
      bars: this.shuffle([...new Array(90)].map((_, index) => index))
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

