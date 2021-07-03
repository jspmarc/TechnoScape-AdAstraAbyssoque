<template>
  <div class="signup-box">
    <img src="../assets/signup-1.svg" /><SignupBox />
  </div>
</template>

<script>
import SignupBox from "../components/Signup/SignupBox.vue";

export default {
  components: {
    SignupBox,
  },
};
</script>

<style scoped lang="scss">
.signup-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0% 10% 0% 3%;

  img {
    width: 800px;
    height: 700px;
  }
}
</style>
