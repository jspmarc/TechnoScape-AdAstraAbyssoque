<template>
  <div class="all">
    <div class="title">
      <h1 class="main">
        Staycation Location
      </h1>
      <p class="sub mt-2">
        We will find the nearest suitable accomodation near the location based
        on your preferences
      </p>
      <select name="loc" class="select mt-6">
        <option value="jakarta">Jakarta</option>
        <option value="bandung">Bandung</option>
        <option value="surabaya">Surabaya</option>
        <option value="semarang">Semarang</option>
        <option value="pontianak">Pontianak</option>
        <option value="pontianak">More...</option>
      </select>
      <button class="submit" @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      this.$store.commit("RESET_RECANS");
      this.$store.state.recommend = true;
      this.$router.push({ path: "/search" });
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
    width: 80%;
    height: 40px;
    padding: 0 20px;

    &:focus {
      outline: none;
    }
  }
}
</style>
