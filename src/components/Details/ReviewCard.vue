<template>
    <div class="review-card flex flex-row p-4 px-4 items-start rounded-xl my-3">
        <div class="image">
            <img src="../../assets/avatar.png"/>
        </div>
        <div class="flex flex-col items-stretch text-left ml-3">
            <p class="font-bold">{{ name }}</p>
            <ReviewStars :count="stars"/>
            <p>{{ comment }}</p>
        </div>
    </div>
</template>

<script>
import ReviewStars from "../ReviewStars.vue";
export default {
  props: {
    name: String,
    stars: Number,
    comment: String
  },
  components: {
    ReviewStars,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 25px;
}

.review-card {
  box-shadow: 0px 4px 20px #c7e0ff;
  transition-duration: 0.5ms;
}

.search-box {
  border: 1px solid #8CB9FD;
}

.image {
  max-width: 45px;
}
</style>