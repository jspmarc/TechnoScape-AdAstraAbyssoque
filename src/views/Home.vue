<template>
  <h1>Home Page {{ this.number }}</h1>
  <p @click="onClick">Click</p>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$store.commit("increment");
    },
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
  },
};
</script>

<style></style>
