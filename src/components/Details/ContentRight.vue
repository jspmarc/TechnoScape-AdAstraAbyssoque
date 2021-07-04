<template>
  <div>
    <Head :rooms="rooms" @book="goBook" @nego="goNego" />
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
  methods: {
    goBook() {
      this.$router.push({ path: "/checkout" });
    },
    goNego() {
      this.$router.push({ path: "/negotiation" });
    },
  },
  props: {
    rooms: Array,
  },
};
</script>

<style></style>
