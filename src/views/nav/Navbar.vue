<template>
  <div class="nav px-20 py-8">
    <div class="nav-left flex items-center inter">
      <router-link class="nav-link mr-10" to="/">
        <img class="logo" src="../../assets/logo.svg" />
      </router-link>
      <router-link class="nav-link mr-10" to="/">HOME</router-link>
      <router-link class="nav-link mr-10" to="/search">EXPLORE</router-link>
      <router-link class="nav-link mr-10" to="/order">
        MY ORDER
      </router-link>
      <router-link class="nav-link mr-10" to="/">
        PROMOTION
      </router-link>
    </div>
    <div class="nav-right">
      <div class="search-box mr-5">
        <font-awesome-icon icon="search" class="icon" />
        <input
          type="text"
          class="search-input"
          placeholder="Search your vacation ..."
          v-model="queryNav"
          v-on:keyup.enter="onSearchSubmit"
        />
      </div>
      <button class="text-only-button mr-5" v-if="!loginStatus">
        <router-link to="/signup" class="text-only-button-link font-bold">
          LOG IN
        </router-link>
      </button>
      <button class="button" v-if="!loginStatus">
        <router-link to="/signup" class="button-link">
          SIGN UP
        </router-link>
      </button>
      <div class="cursor-pointer" v-if="loginStatus">
        <font-awesome-icon
          class="chat icon icon-qty ml-5 mt-3"
          icon="comment-alt"
        />
        <router-link to="/chat" class="mr-5">
          CHAT
        </router-link>
      </div>
      <img src="../../assets/john.jpg" v-if="loginStatus" class="ml-5 mr-18" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryNav: "",
    };
  },
  methods: {
    onSearchSubmit() {
      this.$store.commit("SET_QUERY", this.queryNav);
      this.queryNav = "";
      this.$router.push({ path: "/search" });
    },
  },
  computed: {
    loginStatus() {
      return this.$store.state.login;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  height: 50px;
  background: #fff;
  box-shadow: 0px 4px 20px #c7e0ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 64px;
  height: 64px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
}

.nav-left {
  display: flex;
}

.nav-right {
  display: flex;

  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
    cursor: pointer;
  }
}

.text-only-button-link {
  text-decoration: none;
  color: #2759aa;
}

.button-link {
  text-decoration: none;
  color: #fcfeff;
}

.nav-link {
  text-decoration: none;
  color: #171123;
}

.search-box {
  background: #e5f1ff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #8cb9fd;
  border-radius: 5px;
  height: 38px;
}

.search-input {
  background: transparent;
  border: none;
  margin-left: 5px;
}

.search-input::placeholder {
  color: #8cb9fd;
}

.text-only-button {
  color: #2759aa;
}

.button {
  color: white;
  background: #2759aa;
  padding: 6px 15px;
  border: none;
  border-radius: 5px;
  white-space: nowrap;
}

input {
  width: 190px;
  transition-duration: 0.5s;
}

input:focus {
  width: 360px;
  transition-duration: 0.5s;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  color: #171123;
}
</style>
