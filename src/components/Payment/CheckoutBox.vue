<template>
  <div class="container">
    <h4 class="title inter mb-5">Glamping Looka {{ getTitle() }}</h4>
    <div v-if="step < 2">
      <div class="row">
        <div class="item-small">Check-in time</div>
        <div class="item-big" :style="step ? 'background:#C7E0FF' : ''">
          Sun, 27 February 2021 (14:00)
        </div>
      </div>
      <div class="row">
        <div class="item-small">Check-out time</div>
        <div class="item-big" :style="step ? 'background:#C7E0FF' : ''">
          Sun, 28 February 2021 (12:00)
        </div>
      </div>
      <div class="row-col">
        <p>(1x) Economy</p>
        <p class="grey">1 bedroom</p>
        <p class="grey">1 guest</p>
      </div>
      <h3 class="mt-5 mb-5">Contact Details</h3>
      <div class="row">
        <div class="name-cont">
          <div class="row-col name" :style="step ? 'background:#C7E0FF' : ''">
            <p><strong>Hion Dermansyah</strong></p>
            <p>hiondermansyah@gmail.com</p>
            <p>+62812345678</p>
          </div>
        </div>
        <div class="row-col no-border" v-if="step == 0">
          <div class="flex flex-row items-center my-1">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              class="mr-2 radio"
              checked
            />
            <p class="ml-2">I am booking for myself</p>
          </div>
          <div class="flex flex-row items-center my-1">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              class="mr-2 radio"
            />
            <p class="ml-2">I am booking for another person</p>
          </div>
        </div>
      </div>
      <h3 class="mt-5 mb-5">Request(s)</h3>
      <div
        class="row"
        :style="step ? 'background:#C7E0FF' : 'background:#e5f1ff'"
      >
        <div class="request">
          <font-awesome-icon icon="plus" class="ml-2 mr-2" />
          <p>Add your request</p>
        </div>
      </div>
      <div class="row mt-5 mb-5 items-end">
        <div class="row items-end">
          <h3 class="mr-3">Total Price:</h3>
          <p>Rp999.999</p>
        </div>
        <button
          class="confirm"
          @click="onConfirm"
          :style="step == 2 ? 'background: #42E0C9' : 'background: #2759aa'"
        >
          {{ getSubmitButtonName() }}
        </button>
      </div>
    </div>

    <!-- START PAYMENT -->
    <div class="row-col" v-if="step == 2">
      <p>Sun, 27 February 2021 (14:00) - Sun, 28 February 2021 (12:00)</p>
      <p>(1x) Economy</p>
      <p class="grey">1 bedroom</p>
      <p class="grey">1 guest</p>
      <div class="row items-end mt-5">
        <h3 class="mr-3">Total Price:</h3>
        <p>Rp999.999</p>
      </div>
    </div>

    <h3 class="mt-5 mb-5" v-if="step == 2">Payment Methods</h3>
    <div class="row card-con" v-if="step == 2">
      <button
        class="card"
        @click="selectCard = true"
        :style="selectCard ? 'background: #C7E0FF' : ''"
      >
        <font-awesome-icon icon="credit-card" class="ml-2 mr-2" />
        <p>Mastaacard</p>
      </button>
      <button class="card">
        <font-awesome-icon icon="credit-card" class="ml-2 mr-2" />
        <p>Veesa</p>
      </button>
      <button class="card">
        <font-awesome-icon icon="credit-card" class="ml-2 mr-2" />
        <p>Paipol</p>
      </button>
    </div>

    <div class="row mt-5 mb-5 items-end" v-if="step == 2">
      <button
        class="confirm-pay"
        @click="onConfirm"
        :style="step == 2 ? 'background: #42E0C9' : 'background: #2759aa'"
      >
        {{ getSubmitButtonName() }}
      </button>
    </div>
    <!-- END PAYMENT -->
  </div>
</template>

<script>
export default {
  props: {
    step: {
      default: 0,
    },
  },
  data() {
    return {
      selectCard: false,
    };
  },
  methods: {
    onConfirm() {
      this.$emit("nextStep");
      window.scrollTo(0, 0);
    },
    getTitle() {
      if (this.step == 0) return "";
      if (this.step == 1) return "Booking Confirmation";
      if (this.step == 2) return "Booking Payment";
    },
    getSubmitButtonName() {
      if (this.step == 0) return "Submit";
      if (this.step == 1) return "Proceed to Payment";
      if (this.step == 2) return "Pay and Book";
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  box-shadow: 0px 4px 20px #c7e0ff;
  border-radius: 5px;
  padding: 35px 50px;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .row-col {
    border: 1px solid #c7e0ff;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
  }

  .no-border {
    border: none !important;
  }

  .item-small {
    border: 1px solid #c7e0ff;
    width: 100px;
    width: 30%;
    padding: 10px;
  }

  .item-big {
    border: 1px solid #c7e0ff;
    width: 100%;
    padding: 10px;
  }

  .grey {
    color: #5a6274;
  }

  .name {
    padding: 20px;
    width: 450px;
    background: #e5f1ff;
    border-radius: 10px;
  }

  .name-cont {
    margin-right: 30px;
  }

  .request {
    width: 100%;
    border-radius: 5px;
    color: #8cb9fd;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .confirm {
    color: #fff;
    width: 250px;
    height: 30px;
    border-radius: 10px;
  }

  .confirm-pay {
    color: #fff;
    width: 250px;
    height: 30px;
    border-radius: 10px;
    margin-left: auto;
  }

  .card-con {
    color: #2759aa;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;

    .card {
      box-shadow: 0px 4px 20px #c7e0ff;
      display: block;
      height: 40px;
      padding: 5px 10px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      margin: 0 10px;
      border-radius: 10px;
    }
  }
}
</style>
