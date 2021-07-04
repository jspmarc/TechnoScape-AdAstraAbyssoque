<template>
  <div :class="'room-' + hasRoomAvailable + ' mt-4 flex justify-between items-start'">
    <div>
      <div class="inter-semi text-xl">
        {{ name }}
      </div>
      <div>
        {{ bedroom }} bedroom{{ bedroom !== 1 ? 's' : '' }}
      </div>
      <div>
        {{ person }} {{ person !== 1 ? 'people' : 'person' }}
      </div>
    </div>
    <div class="flex flex-col items-end justify-end">
      <div class="inter-semi text-xl">
        Rp{{ price }} <span class="inter text-base"> / night</span>
      </div>
      <div>
        {{ available }} room{{ available !== 1 ? 's' : '' }} available
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: String,
    available: Number,
    bedroom: Number,
    person: Number,
  },
  computed: {
    hasRoomAvailable() {
      return this.available > 0;
    },
  }
};
</script>

<style lang="scss" scoped>
.room-false {
  text-decoration: line-through;
  opacity: 50%;
}
</style>