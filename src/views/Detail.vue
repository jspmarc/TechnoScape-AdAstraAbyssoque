<template>
  <div class="detail px-20 py-10">
    <Title v-bind="getLodgingData()"/>
  </div>
</template>

<script>
import ACCOMODATION_DATA from '../data/accomodation.json'
import Title from '../components/Details/Title.vue';

export default {
  components: {
    Title,
  },
  methods: {
    getLodgingData() {
      return ACCOMODATION_DATA[0];
    },
  }
};
</script>

<style lang="scss" scoped>
</style>