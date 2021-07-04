<template>
  <div class="container">
    <h2 class="ml-5 mb-5">My Orders</h2>
    <div>
      <img src="../assets/order1.png" />
    </div>
    <div>
      <img class="image2 ml-2" src="../assets/order2.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0 30px 200px;
}

h2 {
  font-size: 32px;
}

img {
  width: 1100px;
  height: 250px;
  cursor: pointer;
}

.image2 {
  width: 1085px;
  height: 250px;
  cursor: pointer;
}
</style>
