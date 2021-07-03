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

<style>
body {
  margin: 0;
}
</style>
