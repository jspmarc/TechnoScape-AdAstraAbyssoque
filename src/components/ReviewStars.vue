<template>
  <div>
    <font-awesome-icon
      icon="star"
      v-for="item in fullStarCount"
      :key="item"
      :style="cssProps"
      class="star"
    />
    <font-awesome-icon
      v-if="hasHalfStar"
      icon="star-half-alt"
      :style="cssProps"
      class="star"
    />
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    width: {
      type: String,
      default: "1rem",
    },
    height: {
      type: String,
      default: "1rem",
    },
  },
  computed: {
    fullStarCount() {
      return Math.floor(this.count);
    },
    hasHalfStar() {
      const notInt = Math.floor(this.count) !== this.count;
      return notInt && ((this.count - Math.floor(this.count)) >= 0.5);
    },
    cssProps() {
      return {
        '--starHeight': this.height,
        '--starWidth': this.width,
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.star {
  color: #FFCD17;
  height: var(--starHeight);
  width: var(--starWidth);
}
</style>