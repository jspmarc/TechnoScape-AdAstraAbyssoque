<template>
  <div class="container">
    <h4 class="title inter mb-5">Glamping Looka</h4>
    <div v-if="step < 2">
      <div class="row">
        <div class="item-small">Check-in time</div>
        <div class="item-big">
          Sun, 27 February 2021 (14:00)
        </div>
      </div>
      <div class="row">
        <div class="item-small">Check-out time</div>
        <div class="item-big">
          Sun, 28 February 2021 (12:00)
        </div>
      </div>
      <div class="row-col">
        <p>(1x) Economy</p>
        <p class="grey">1 bedroom</p>
        <p class="grey">1 guest</p>
      </div>
      <h3 class="mt-5 mb-5">Negotiated Price</h3>
      <div class="row nego">
        <div class="request-price mb-3">
          <font-awesome-icon icon="comment-alt" class="ml-2 mr-2" />
          <input placeholder="Your offer price" />
        </div>
        <div class="request mb-3">
          <font-awesome-icon icon="comment-alt" class="ml-2 mr-2" />
          <input placeholder="Add a notes" />
        </div>
      </div>
      <div class="row mt-5 mb-5 items-end">
        <button class="confirm" @click="onConfirm">Negotiate</button>
      </div>
    </div>
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

  .nego {
    flex-direction: column;
  }

  .row-col {
    border: 1px solid #c7e0ff;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
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

  .no-border {
    border: none !important;
  }

  .grey {
    color: #5a6274;
  }

  .request-price {
    width: 30%;
    border-radius: 5px;
    background: #e5f1ff;
    color: #8cb9fd;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .request {
    width: 100%;
    border-radius: 5px;
    background: #e5f1ff;
    color: #8cb9fd;
    height: 40px;
    display: flex;
    align-items: center;
  }

  input {
    background: #e5f1ff;

    &::placeholder {
      color: #8cb9fd;
    }
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    color: #171123;
  }

  .confirm {
    color: #fff;
    width: 250px;
    height: 30px;
    border-radius: 15px;
    margin-left: auto;
    background: #2759aa;
  }
}
</style>
