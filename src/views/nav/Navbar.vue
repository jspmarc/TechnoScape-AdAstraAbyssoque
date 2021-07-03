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
        <font-awesome-icon icon="search" />
        <input
          type="text"
          class="search-input"
          placeholder="Search your vacation ..."
        />
      </div>
      <button class="button">SIGN UP</button>
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

.nav-link {
  text-decoration: none;
  color: black;
  margin-right: 40px;
}

.search-box {
  background: #e5f1ff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #8cb9fd;
  border-radius: 5px;
}

.search-input {
  background: transparent;
  border: none;
  margin-left: 5px;
}

.search-input::placeholder {
  color: #8cb9fd;
}

.button {
  color: white;
  background: #2759aa;
  padding: 6px 15px;
  border: none;
  border-radius: 5px;
  white-space: nowrap;
  margin-left: 15px;
}
</style>
