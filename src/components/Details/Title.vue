<template>
  <div class="container">
    <div class="head flex">
      <h1 class="inter-bold text-6xl mb-4">
        {{ name }}
      </h1>
      <div class="rating flex ml-4 -mt-1">
        <ReviewStars
          :count="4.7"
          :height="'2rem'"
          :width="'2rem'"
        />
      </div>
    </div>

    <div class="mb-3">
      <Tag :tagType="'accomodation'" :content="type" />
      <Tag :tagType="'negotiation'" />
      <!-- <Tag :tagType="'setting'" :content="setting" /> -->
    </div>

    <div class="location text-lg">
      <font-awesome-icon icon="map-marker-alt" />
      <span>
        {{ location }}
      </span>
    </div>

    <div class="csr text-lg">
      <font-awesome-icon icon="shield-virus" />
      <span> {{ covid }} / 5 </span>
      <span class="text-xs"
        >* COVID-19 rating evaluates how safe an accomodation is
      </span>
    </div>
  </div>
</template>

<script>
import ReviewStars from "../ReviewStars.vue";
import Tag from "../Tags.vue";

export default {
  components: {
    Tag,
    ReviewStars,
  },
  props: {
    name: String,
    location: String,
    covid: Number,
    type: String,
    setting: String,
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--white);

  .head {
    flex-direction: row;
    align-items: center;
  }

  .location {
    color: #2759aa;

    span {
      margin-left: 1rem;
    }
  }

  .csr {
    color: #42e0c9;
    margin-bottom: 1rem;

    span {
      margin-left: 1rem;
    }
  }
}
</style>
