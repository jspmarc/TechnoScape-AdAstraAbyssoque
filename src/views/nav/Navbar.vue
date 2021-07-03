<template>
  <div class="nav px-20 py-8">
    <div class="nav-left">
      <div class="nav-link mr-10 font-bold">
        ICON
      </div>
      <router-link class="nav-link mr-10 font-bold" to="/">HOME</router-link>
      <router-link class="nav-link mr-10 font-bold" to="/">PAGE #</router-link>
      <router-link class="nav-link mr-10 font-bold" to="/">PAGE #</router-link>
    </div>
    <div class="nav-right">
      <div class="search-box mr-5">
        <font-awesome-icon icon="search" class="icon"/>
        <input type="text" class="search-input" placeholder="Search your vacation ...">
      </div>
      <button class="text-only-button mr-5">
        <router-link to="/Signup" class="text-only-button-link font-bold">
          LOG IN
        </router-link>
      </button>
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

.nav-left {
  display: flex;
}

.nav-right {
  display: flex;
}

.text-only-button-link {
  text-decoration: none;
  color: #2759AA;
}

.button-link {
  text-decoration: none;
  color: #FCFEFF;
}

.nav-link {
  text-decoration: none;
  color: #171123;
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

.text-only-button {
  color: #2759AA;
}

.button {
  color: white;
  background: #2759AA;
  padding: 6px 15px;
  border: none;
  border-radius: 5px;
  white-space: nowrap;
}

input:focus, textarea:focus, select:focus{
  outline: none;
  color: #171123;
}
</style>
