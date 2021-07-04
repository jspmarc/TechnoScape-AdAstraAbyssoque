<template>
  <div class="container">
    <div class="description">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="mt-8">
      <h1 class="text-3xl font-bold">Amenities</h1>
      <div class="grid grid-cols-2 mt-2">
        <div class="text-md">
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="wifi" class="icon mr-1" />
            <p>Wi-fi</p>
          </div>
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="bell" class="icon mr-1" />
            <p>24-hour security</p>
          </div>
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="parking" class="icon mr-1" />
            <p>Free parking</p>
          </div>
        </div>
        <div class="text-md">
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="tv" class="icon mr-1" />
            <p>TV</p>
          </div>
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="utensils" class="icon mr-1" />
            <p>Free breakfast</p>
          </div>
          <div class="flex flex-row items-center my-1">
            <font-awesome-icon icon="bus" class="icon mr-1" />
            <p>Bus</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <h1 class="text-3xl font-bold">Review</h1>
      <div v-for="(item, index) in getData" :key="index" class="item-container">
        <div v-if="!isMore">
          <div v-if="index < 3">
            <ReviewCard
              :name="item.name"
              :stars="item.stars"
              :comment="item.comment"
            />
          </div>
        </div>
        <div v-if="isMore">
          <ReviewCard
            :name="item.name"
            :stars="item.stars"
            :comment="item.comment"
          />
        </div>
      </div>
      <button
        v-if="!isMore"
        class="button rounded-2xl px-4 py-1 m-auto my-6"
        @click="isMore = true"
      >
        Load More Reviews
      </button>
      <button
        v-if="isMore"
        class="button rounded-2xl px-4 py-1 m-auto my-6"
        @click="isMore = false"
      >
        Load Less
      </button>
    </div>
    <div class="mt-2">
      <h1 class="text-3xl font-bold">Location</h1>
      <img class="mt-3 rounded-xl" src="../../assets/map.png" />
    </div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
import data from "../../data/reviews.json";
export default {
  props: {
    description: String,
  },
  components: {
    ReviewCard,
  },
  computed: {
    getData() {
      return data;
    },
  },
  data() {
    return {
      isMore: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.description {
  text-align: justify;
  text-justify: inter-word;
}

.icon {
  width: 25px;
}

.review-card {
  box-shadow: 0px 4px 20px #c7e0ff;
}

.search-box {
  border: 1px solid #8cb9fd;
}

.image {
  width: 100px;
}

.button {
  background: #2759aa;
  color: #fcfeff;
}

.item-container {
  transition-duration: 0.5s;
}

.item-container:focus {
  transition-duration: 0.5s;
}
</style>
