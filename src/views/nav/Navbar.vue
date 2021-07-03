<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-link">
        ICON
      </div>
      <router-link class="nav-link" to="/">HOME</router-link>
      <router-link class="nav-link" to="/">PAGE #</router-link>
      <router-link class="nav-link" to="/">PAGE #</router-link>
    </div>
    <div class="nav-right">
      <div class="search-box">
        <font-awesome-icon icon="search" class="icon"/>
        <input type="text" class="search-input" placeholder="Search your vacation ...">
      </div>
      <button class="button">
        <router-link to="/Signup" class="button-link">
          SIGN UP
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav {
  position: sticky;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}

.nav-left {
  display: flex;
}

.nav-right {
  display: flex;
}

.button-link {
  text-decoration: none;
  color: #FCFEFF;
}

.nav-link {
  text-decoration: none;
  color: #171123;
  margin-right: 40px;
}

.search-box {
  background: #E5F1FF;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #8CB9FD;
  border-radius: 5px;
}

.icon:hover {
  cursor: pointer;
}

.search-input {
  background: transparent;
  border: none;
  margin-left: 5px;
}

.search-input::placeholder {
  color: #8CB9FD;
}

.button {
  color: white;
  background: #2759AA;
  padding: 6px 15px;
  border: none;
  border-radius: 5px;
  white-space: nowrap;
  margin-left: 15px;
}

input:focus, textarea:focus, select:focus{
  outline: none;
  color: #171123;
}
</style>
