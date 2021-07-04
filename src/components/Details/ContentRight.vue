<template>
  <div>
    <Head :rooms="rooms" />
    <Foot />
  </div>
</template>

<script>
import Head from "../Details/ContentRightHead.vue";
import Foot from "../Details/ContentRightFoot.vue";
export default {
  components: {
    Head,
    Foot,
  },
  props: {
    rooms: Array,
  },
};
</script>

<style>

</style>