<template>
  <div>
    <Jumbotron />
    <TestBox />
    <HotelCard />
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue";
import TestBox from "../components/Home/TestBox.vue";
import HotelCard from "../components/Home/HotelCard.vue";

export default {
  components: {
    Jumbotron,
    TestBox,
    HotelCard,
  },
};
</script>

<style></style>
