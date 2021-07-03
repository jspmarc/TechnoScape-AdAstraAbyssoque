<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./views/nav/Navbar";

export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Mlaku | Your staycation, your price.";
      },
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
/* @import url("https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900&subset=latin-ext"); */

body {
  margin: 0;
}
</style>
