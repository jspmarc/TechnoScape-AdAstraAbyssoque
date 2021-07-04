<template>
  <div class="container">
    <h2 class="mb-3">Negotiation</h2>
    <NegotiationBox @nextStep="checkStep" />
    <NegotiationSuccessDialog v-if="showDialogSuccess" />
  </div>
</template>

<script>
import NegotiationBox from "../components/Payment/NegotiationBox.vue";
import NegotiationSuccessDialog from "../components/Payment/NegotiationSuccessDialog.vue";

export default {
  data() {
    return {
      step: 0,
      showDialogSuccess: false,
    };
  },
  methods: {
    checkStep() {
      this.showDialogSuccess = true;
    },
  },
  components: {
    NegotiationBox,
    NegotiationSuccessDialog,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;

  h2 {
    font-size: 32px;
  }
}
</style>
