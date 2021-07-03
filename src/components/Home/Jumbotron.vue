<template>
  <div class="jumbo-container p-20">
    <p class="text-6xl mb-2 font-bold">Mlaku</p>
    <p class="text-3xl mb-4">Your staycation, your price.</p>
    <p class="w-1/2 text-xl">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.jumbo-container {
  background: #b5b5b5;
  height: 500px;
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
