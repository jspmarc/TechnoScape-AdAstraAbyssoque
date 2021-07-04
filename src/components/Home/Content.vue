<template>
  <div class="all">
    <div class="title">
      <h1 class="main">
        {{ getQuestions() }}
      </h1>
      <p class="sub">
        (Choose one picture)
      </p>
    </div>
    <ul class="answers">
      <li v-for="(item, index) in getChoices()" :key="index">
        <img :src="item.link" :alt="item.type" @click="onClick(item.type)" />
      </li>
    </ul>
  </div>
</template>

<script>
import data from "../../data/recommendationTest.json";

export default {
  data() {
    return {
      recAns: this.$store.state.recAns,
    };
  },
  methods: {
    onClick(answer) {
      this.recAns.push(answer);
      const limit = data.length;

      if (this.recAns.length >= limit) {
        this.$emit("onNext");
      }
    },
    getQuestions() {
      return data[this.recAns.length].question;
    },
    getChoices() {
      return data[this.recAns.length].choices;
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 85vh;

  .title {
    margin-bottom: 5rem;

    .main {
      font-size: 36px;
      text-align: center;
    }
    .sub {
      font-size: 24px;
      text-align: center;
    }
  }

  .answers {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    width: 50vw;
    height: 70vh;

    li {
      width: 20vw;
      height: 30vh;
      margin: 0 0 1rem 0;

      img {
        width: 20vw;
        height: 30vh;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
}
</style>
