<template>
  <div class="box">
    <h1>Sign Up</h1>
    <div class="form-box">
      <p>Enter Email or Phone Number</p>
      <input placeholder="Email or Phone Number" />
    </div>
    <button>Continue</button>
    <p>Already have an account?</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 444px;
  height: 350px;
  box-shadow: 0px 4px 20px #c7e0ff;
  border-radius: 5px;
  text-align: center;
  padding: 10px 0;
}

.box > button {
  width: 300px;
  height: 40px;
  background: #2759aa;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  margin: 10px 0;
}

.box > p {
  text-decoration: underline;
}

.form-box {
  text-align: left;
  padding: 10px 70px;
  margin: 10px 0;
}

.form-box > input {
  width: 300px;
  height: 30px;
}
</style>
