<template>
  <div class="detail px-20 py-10">
    <Title v-bind="getAccomodationData"/>
    <Gallery v-bind="getAccomodationData"/>
    <div class="content">
      <div class="left">
        <ContentLeft v-bind="getAccomodationData" />
      </div>
      <div class="right">
        <ContentRight v-bind="getAccomodationData" />
      </div>
    </div>
  </div>
</template>

<script>
import ACCOMODATION_DATA from '../data/accomodation.json'
import Title from '../components/Details/Title.vue';
import Gallery from '../components/Details/Gallery.vue';
import ContentLeft from '../components/Details/ContentLeft.vue';
import ContentRight from '../components/Details/ContentRight.vue';

export default {
  components: {
    ContentLeft,
    ContentRight,
    Gallery,
    Title,
  },
  computed: {
    getAccomodationData() {
      return ACCOMODATION_DATA[0];
    },
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 80%;
  margin: auto;
  background-color: var(--white);

  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 3rem;

    .left {
      align-self: flex-start;
      flex-grow: 1;
      margin-right: 5rem;
    }

    .right {
      align-self: flex-start;
      width: 60vw;
    }
  }
}
</style>