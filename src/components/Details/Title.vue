<template>
  <div class="all">
    <div class="head flex">
      <h1 class="inter-bold">
        {{ name }}
      </h1>
      <div class="rating flex ml-8">
        <ReviewStars
          :count="4.6"
          :height="'3rem'"
          :width="'3rem'"
        />
      </div>
    </div>

    <div class="mb-3">
      <Tag :tagType="'accomodation'" :content="'Villa'" />
      <Tag :tagType="'negotiation'" />
      <Tag :tagType="'atmosphere'" :content="'City'" />
    </div>

    <div class="location text-lg">
      <font-awesome-icon icon="map-marker-alt" />
      <span>
        {{ location }}
      </span>
    </div>

    <div class="csr text-lg">
      <font-awesome-icon icon="shield-virus" />
      <span>
        {{ covid }} / 5
      </span>
    </div>
  </div>
</template>

<script>
import ReviewStars from '../ReviewStars.vue';
import Tag from '../Tags.vue';

export default {
  components: {
    Tag,
    ReviewStars,
  },
  props: {
    name: String,
    location: String,
    covid: Number,
  }
};
</script>

<style lang="scss" scoped>
.all {
  background-color: var(--white);

  .head {
    flex-direction: row;
    align-items: center;
  }

  .location {
    color: #2759AA;

    span {
      margin-left: 1rem;
    }
  }

  .csr {
    color: #42E0C9;

    span {
      margin-left: 1rem;
    }
  }
}
</style>