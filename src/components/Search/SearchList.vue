<template>
  <div class="container ml-5">
    <p v-if="query" class="mb-5">
      Showing results for: "<span style="color:#C22929">{{ query }}</span
      >"
    </p>
    <p v-if="recommend && recommendStatus" class="mb-5">
      Here are some accomodations based on
      <span style="color:#C22929">your preferences</span>.
    </p>
    <div class="flex flex-row justify-between">
      <div class="flex flex-row items-center">
        <p class="mr-2">Sort by</p>
        <button
          class="search-box px-3 flex items-center rounded-2xl justify-between mr-2 py-1"
        >
          <p>Best Seller</p>
        </button>
        <button
          class="search-box px-3 flex items-center rounded-2xl justify-between py-1"
        >
          <p>Most Reviewed</p>
        </button>
      </div>
      <div class="flex flex-row">
        <button
          class="search-box px-3 flex items-center rounded-2xl justify-between mr-2 py-1"
        >
          <p class="mr-12">Price</p>
          <font-awesome-icon
            icon="chevron-down"
            class="icon text-sm"
            @click="showGuest = true"
          />
        </button>
        <button
          class="search-box px-3 flex items-center rounded-2xl justify-between py-1"
        >
          <p class="mr-12">Rating</p>
          <font-awesome-icon
            icon="chevron-down"
            class="icon text-sm"
            @click="showGuest = true"
          />
        </button>
      </div>
      <!-- <button>button</button>
      <button>active</button>
      <button>button</button> -->
    </div>
    <div
      class="item-container"
      v-for="(item, index) in searchResult()"
      :key="index"
    >
      <SearchItem
        :name="item.name"
        :star="item.star"
        :price="item.price"
        :badge1="item.badge1"
        :badge2="item.badge2"
        :location="item.location"
        :rating="item.rating"
        :numReview="item.numReview"
        :covid="item.covid"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
import SearchItem from "./SearchItem";
import data from "../../data/searchResult.json";
import dataRec from "../../data/searchRecommendation.json";

export default {
  props: {
    recommendStatus: Boolean,
  },
  data() {
    return {
      recommend: false,
    };
  },
  methods: {
    onMount() {
      if (this.$store.state.recommend) this.recommend = true;
      this.$store.state.recommend = false;
    },
    searchResult() {
      return this.recommend ? dataRec : data;
    },
  },
  computed: {
    query() {
      return this.$store.state.query || this.$store.state.queryNav;
    },
  },
  mounted() {
    this.onMount();
  },
  components: {
    SearchItem,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;

  .item-container {
    width: 100%;
    margin: 20px 0;
  }
}

.search-box {
  border: 1px solid #8cb9fd;
}
</style>
