<template>
  <div class="container">
    <img :src="require('../../assets/' + image)" />
    <div class="info">
      <div class="row justify-between items-center">
        <div class="row-left flex flex-row items-center">
          <p class="mr-3 text-xl inter-semi"> {{ name }} </p>
          <ReviewStars :count="parseInt(star)"/>
        </div>
        <div class="row-right inter">
          <p>
            <span class="inter-semi">Rp {{ price }}</span> / night
          </p>
        </div>
      </div>
      <div class="row mt-2">
        <button v-if="badge1" class="badge dark mr-1">{{ badge1 }}</button>
        <button v-if="badge2" class="badge light">{{ badge2 }}</button>
      </div>
      <div class="row mt-4 items-center">
        <font-awesome-icon icon="map-marker-alt" class="icon-location mr-2 text-blue" />
        <p class="text-blue">{{ location }}</p>
      </div>
      <div class="row mt-2 items-center">
        <font-awesome-icon icon="comment-alt" class="icon-location mr-2 text-blue" />
        <p class="text-blue">{{ rating }}&nbsp;/&nbsp;10 ({{ numReview }})</p>
      </div>
      <div class="row mt-2 items-center">
        <font-awesome-icon icon="shield-virus" class="icon-location mr-2 text-green" />
        <p class="text-green">{{ covid }}&nbsp;/&nbsp;5</p>
      </div>
      <div class="row">
        <p class="text-blue text-large">Book now!</p>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewStars from "../ReviewStars.vue";
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
  components: {
    ReviewStars,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  box-shadow: 0px 4px 20px #c7e0ff;
  border-radius: 10px;
  display: flex;

  button:focus {
    outline: none;
  }

  img {
    width: 20%;
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
        color: #2759aa;
      }

      .text-green {
        color: #42e0c9;
      }

      .text-large {
        text-decoration: underline;
        margin-left: auto;

        &:hover {
          cursor: pointer;
        }
      }

      .badge {
        display: block;
        padding: 1px 10px;
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
