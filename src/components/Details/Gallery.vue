<template>
  <div class="container flex">
    <div class="spotlight">
      <img :src="require(`../../assets/${photos[0]}`)" />
    </div>
    <div class="others">
      <div class="others-container" v-for="(photo, idx) in getOthers" :key="idx">
        <img :class="'img-' + idx" :src="require(`../../assets/${photos[idx]}`)" />
        <div v-if="idx === 3" class="more-imgs text-4xl">
          2
          <font-awesome-icon icon="images" />
          <!-- <font-awesome-icon icon="plus" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photos: Array,
  },
  computed: {
    getOthers() {
      return [this.photos[1], this.photos[2], this.photos[3], this.photos[4]];
    },
  }
};
</script>

<style lang="scss" scoped>
$h: 60vh;

.container {
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: $h;

  .spotlight {
    width: 50%;
    img {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      width: 100%;
      height: $h;
      object-fit: cover;
    }
  }

  .others {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;

    height: $h;
    width: 50%;

    .others-container {
      position: relative;
      width: 50%;
      height: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .img-2 {
        border-top-right-radius: 1rem;
      }

      .img-3 {
        border-bottom-right-radius: 1rem;
        filter: blur(3px) brightness(0.4);
        cursor: pointer;
      }

      .more-imgs {
        cursor: pointer;
        position: absolute;
        color: var(--white);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>