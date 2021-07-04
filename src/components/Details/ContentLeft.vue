<template>
  <div class="container">
    <div class="description">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
  },
};
</script>

<style lang="scss" scoped>
</style>