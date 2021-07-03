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
        <font-awesome-icon icon="search" class="icon" />
        <input
          type="text"
          class="search-input"
          placeholder="Search your vacation ..."
        />
      </div>
      <button class="text-only-button mr-5">
        <router-link to="/Signup" class="text-only-button-link font-bold">
          LOG IN
        </router-link>
      </button>
      <button class="button">
        <router-link to="/signup" class="button-link">
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
}

.icon {
  margin-right: 10px;
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
