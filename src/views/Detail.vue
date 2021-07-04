<template>
  <div class="detail px-20 py-10">
    <Title v-bind="getLodgingData"/>
    <Gallery v-bind="getLodgingData"/>
  </div>
</template>

<script>
import ACCOMODATION_DATA from '../data/accomodation.json'
import Title from '../components/Details/Title.vue';
import Gallery from '../components/Details/Gallery.vue';

export default {
  components: {
    Gallery,
    Title,
  },
  computed: {
    getLodgingData() {
      return ACCOMODATION_DATA[0];
    },
  }
};
</script>

<style lang="scss" scoped>
</style>