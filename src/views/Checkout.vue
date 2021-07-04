<template>
  <div class="container">
    <h2 class="mb-3">Your Booking Details</h2>
    <CheckoutStep :step="step" />
    <CheckoutBox :step="step" @nextStep="checkStep" />
    <CheckoutSuccessDialog v-if="showDialogSuccess" />
  </div>
</template>

<script>
import CheckoutBox from "../components/Payment/CheckoutBox.vue";
import CheckoutStep from "../components/Payment/CheckoutStep.vue";
import CheckoutSuccessDialog from "../components/Payment/CheckoutSuccessDialog.vue";

export default {
  data() {
    return {
      step: 0,
      showDialogSuccess: false,
    };
  },
  methods: {
    checkStep() {
      if (this.step < 2) this.step += 1;
      else {
        this.showDialogSuccess = true;
      }
    },
  },
  components: {
    CheckoutBox,
    CheckoutStep,
    CheckoutSuccessDialog,
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
