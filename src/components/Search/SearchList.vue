<template>
  <div class="container ml-5">
    <p v-if="query">
      Showing results for: "<span style="color:#C22929">{{ query }}</span
      >"
    </p>
    <div
      class="item-container"
      v-for="(item, index) in searchResult"
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

export default {
  computed: {
    query() {
      return this.$store.state.query || this.$store.state.queryNav;
    },
    searchResult() {
      return data;
    },
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
</style>
