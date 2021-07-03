<template>
  <div class="nav">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/about">About</router-link> |
    <router-link class="nav-link" to="/signup">Signup</router-link>
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
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
</style>
