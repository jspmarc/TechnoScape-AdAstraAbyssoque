<template>
  <div class="container">
    <img :src="require('../../assets/' + image)" />
    <div class="info">
      <div class="row justify-between">
        <div class="row-left flex flex-row">
          <p class="mr-5">
            <strong>{{ name }}</strong>
          </p>
          <div class="mr-1" v-for="index in parseInt(star)" :key="index">
            <p>*</p>
          </div>
        </div>
        <div class="row-right">
          <p>
            <strong>Rp {{ price }}</strong> / night
          </p>
        </div>
      </div>
      <div class="row mt-2">
        <button v-if="badge1" class="badge dark">{{ badge1 }}</button>
        <button v-if="badge2" class="badge light">{{ badge2 }}</button>
      </div>
      <div class="row mt-4">
        <p class="text-blue">{{ location }}</p>
      </div>
      <div class="row">
        <p class="text-blue">{{ rating }}/10 ({{ numReview }})</p>
      </div>
      <div class="row">
        <p class="text-green">{{ covid }}/5</p>
      </div>
      <div class="row">
        <p class="text-blue text-large">Book now!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    star: String,
    price: String,
    badge1: String,
    badge2: String,
    location: String,
    rating: String,
    numReview: String,
    covid: String,
    image: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 200px;
  box-shadow: 0px 4px 20px #c7e0ff;
  border-radius: 10px;
  display: flex;

  button:focus {
    outline: none;
  }

  img {
    width: 20%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }

  .info {
    width: 80%;
    padding: 25px;

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;

      .text-blue {
        font-size: 13px;
        color: #2759aa;
      }

      .text-green {
        font-size: 13px;
        color: #42e0c9;
      }

      .text-large {
        font-size: 15px;
        text-decoration: underline;
        margin-left: auto;

        &:hover {
          cursor: pointer;
        }
      }

      .badge {
        display: block;
        padding: 1px 10px;
        margin-right: 10px;
        color: #fff;
      }

      .dark {
        background: #2759aa;
      }

      .light {
        background: #8cb9fd;
      }
    }
  }
}
</style>
