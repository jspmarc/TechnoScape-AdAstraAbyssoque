<template>
  <div class="all">
    <div class="title">
      <h1 class="main">
        Your Budget
      </h1>
      <p class="sub mt-2">
        Select your desired budget amount
      </p>
      <select name="loc" class="select mt-6">
        <option value="jakarta">&lt; Rp200.000</option>
        <option value="bandung">Rp200.000 - Rp400.000</option>
        <option value="surabaya">Rp500.000 - Rp800.000</option>
        <option value="semarang">Rp800.000 - Rp1.200.000</option>
        <option value="semarang">Rp1.200.000 - Rp1.500.000</option>
        <option value="pontianak">&gt; Rp1.500.000</option>
      </select>
      <button class="submit" @click="onNext">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onNext() {
      this.$emit("onNext");
    },
  },
};
</script>

<style lang="scss" scoped>
.submit {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin-top: 40px;
  background: #053267;
  color: #fff;
}

.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 750px;
  height: 55vh;

  .title {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
      font-size: 36px;
      text-align: center;
    }
    .sub {
      width: 70%;
      font-size: 16px;
      text-align: center;
      color: #555;
    }
  }

  .select {
    background: transparent;
    border: 1px solid #555;
    border-radius: 10px;
    width: 370px;
    height: 40px;
    padding: 0 20px;

    &:focus {
      outline: none;
    }
  }
}
</style>
