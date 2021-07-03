<template>
  <div class="box">
    <h3>Sign Up</h3>
    <div class="form-box">
      <p>Enter Email or Phone Number</p>
      <div class="search-box">
        <input placeholder="Email or Phone Number" />
      </div>
    </div>
    <button>CONTINUE</button>
    <p class="link">Already have an account?</p>
    <div class="or">
      <hr />
      or
      <hr />
    </div>
    <div class="auth">
      <button class="google" @click="onSignUpClick">
        <img src="../../assets/signup-google.png" />Sign up with Google
      </button>
      <button class="facebook" @click="onSignUpClick">
        <img src="../../assets/signup-facebook.png" />Sign up with Facebook
      </button>
      <button class="twitter" @click="onSignUpClick">
        <img src="../../assets/signup-twitter.png" />Sign up with Twitter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSignUpClick() {
      this.$store.state.login = true;
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 444px;
  height: 550px;
  box-shadow: 0px 4px 20px #c7e0ff;
  border-radius: 5px;
  text-align: center;
  padding: 35px 0 20px 0;

  .link {
    text-decoration: underline;
    margin: 15px 0;
  }

  button {
    width: 300px;
    height: 40px;
    background: #2759aa;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    margin: 0 0 5px 0;
  }

  .or {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    hr {
      width: 25%;
      margin: 0 10px;
    }
  }
}

.form-box {
  text-align: left;
  padding: 10px 70px;
  margin: 15px 0;

  .search-box {
    background: #e5f1ff;
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: #8cb9fd;
    border-radius: 5px;
    margin-top: 10px;
  }

  input {
    width: 300px;
    height: 40px;
    background: transparent;
  }

  input::placeholder {
    color: #8cb9fd;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    color: #171123;
  }

  p {
    margin-left: 5px;
  }
}

.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    color: #fff;
    border-radius: 48px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0 35px 0 25px;
  }

  .google {
    background: #ffffff;
    border: 1px solid #a2a7b3;
    box-sizing: border-box;
    color: #000 !important;
  }

  .facebook {
    background: #1975ee;
  }

  .twitter {
    background: #089de4;
  }
}
</style>
