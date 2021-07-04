<template>
  <div class="container">
    <div class="row-bar ml-5">
      <div
        class="circle"
        :style="
          parseInt(step) >= 0 ? 'background: #42E0C9' : 'background: #e5f1ff'
        "
      ></div>
      <div
        class="line"
        :style="
          parseInt(step) >= 1 ? 'background: #42E0C9' : 'background: #e5f1ff'
        "
      ></div>
      <div
        class="circle"
        :style="
          parseInt(step) >= 1 ? 'background: #42E0C9' : 'background: #e5f1ff'
        "
      ></div>
      <div
        class="line"
        :style="
          parseInt(step) >= 2 ? 'background: #42E0C9' : 'background: #e5f1ff'
        "
      ></div>
      <div
        class="circle"
        :style="
          parseInt(step) >= 2 ? 'background: #42E0C9' : 'background: #e5f1ff'
        "
      ></div>
    </div>
    <div class="row">
      <div class="item1">
        <p :style="parseInt(step) == 0 ? 'font-weight:700' : ''">Book</p>
      </div>
      <div class="item2">
        <p :style="parseInt(step) == 1 ? 'font-weight:700' : ''">Confirm</p>
      </div>
      <div class="item3">
        <p :style="parseInt(step) == 2 ? 'font-weight:700' : ''">Payment</p>
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
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .row-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }

  .circle {
    border-radius: 10px;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }

  .line {
    width: 500px;
    height: 6px;
  }

  .item1 {
    position: absolute;
    left: 240px;
  }

  .item2 {
    position: absolute;
    left: 750px;
  }

  .item3 {
    position: absolute;
    left: 1260px;
  }
}
</style>
