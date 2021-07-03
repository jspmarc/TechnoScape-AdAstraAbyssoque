<template>
  <div class="all">
    <div class="title">
      <h1 class="main">
        Which atmosphere do you like the most?
      </h1>
      <p class="sub">
        (choose one picture)
      </p>
    </div>
    <ul class="jawaban">
      <li>
        <img
          src="https://lh3.googleusercontent.com/proxy/E0QD2benripPpMCA2mwnK-BuuIzW833YponRCeOAFm_zL9FIwjZ1-U48Etv1OLNw10pqGqmS83VP3FfeyKB-v7aX6vOGW61JpgyoZN0B780y79vHpFviePpBh8G-BVSohHRhYfdA"
          alt="" />
      </li>
      <li>
        <img
          src="https://www.rentalmobilbali.net/wp-content/uploads/2011/12/Pantai-Pasir-Putih-Di-Bali-1.jpg"
          alt="" />
      </li>
      <li>
        <img
          src="https://cdn.idntimes.com/content-images/post/20190917/vila-di-gunung-agung-e0a8b5ac05f947ac90756c8f4f4de793_600x400.jpg"
          alt="" />
      </li>
      <li>
        <img
          src="https://www.goodnewsfromindonesia.id/uploads/post/large-mobillombokdotcom-7de3a7e162c38929f23c9491ead3e3c8.jpg"
          alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 5rem;

    .main {
      font-size: 48px;
      text-align: center;
    }
    .sub {
      font-size: 24px;
      text-align: center;
    }
  }

  .jawaban {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    width: 50vw;
    height: 73vh;

    li {
      width: 400px;
      height: 300px;
      margin: 0 0 3rem 0;

      img {
        width: 400px;
        height: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>