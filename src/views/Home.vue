<template>
  <div>
    <Jumbotron />
    <TestBox />
    <RecommendationTest /> <!-- ini ntar dibikin bisa di-hide terus dimunculin -->
    <HotelCard />
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue";
import RecommendationTest from "../components/Home/RecommendationTest.vue";
import TestBox from "../components/Home/TestBox.vue";
import HotelCard from "../components/Home/HotelCard.vue";

export default {
  components: {
    Jumbotron,
    RecommendationTest,
    TestBox,
    HotelCard,
  },
};
</script>

<style></style>
