<template>
  <div>
    <font-awesome-icon
      style="color: #FFCD17"
      icon="star"
      v-for="item in fullStarCount"
      :key="item"
    />
    <font-awesome-icon
      v-if="hasHalfStar"
      style="color: #FFCD17"
      icon="star-half-alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
  computed: {
    fullStarCount() {
      return Math.floor(this.count);
    },
    hasHalfStar() {
      const notInt = Math.floor(this.count) !== this.count;
      return notInt && ((this.count - Math.floor(this.count)) >= 0.5);
    },
  }
};
</script>

<style lang="scss" scoped>
</style>