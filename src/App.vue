<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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

/* route transition */
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.12s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.12s ease-in;
}

body {
  margin: 0;
}
</style>
