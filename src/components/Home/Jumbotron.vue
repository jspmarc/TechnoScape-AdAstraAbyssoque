<template>
  <div class="jumbo-container p-20">
    <p class="text-6xl mb-2 font-bold">Mlaku</p>
    <p class="text-3xl mb-4 inter">Your staycation, your price.</p>
    <p class="w-1/2 text-xl">
      A groundbreaking web app providing access for renters to discover and
      purchase a wide range of negotiable non-hotel accommodation based on their
      personal preferences
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.jumbo-container {
  background: #b5b5b5;
  height: 62vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: 0px -350px;
  background-image: url("../../assets/jumbotron.png");
  background-size: 100% auto;

  h1 {
    letter-spacing: 5px;
    font-size: 90px;
  }
}
</style>
