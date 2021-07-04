<template>
  <div>
    <div v-if="!is_selected" class="container flex flex-row p-4 px-6 items-center rounded-xl">
      <div class="w-24">
          <img src="../../assets/avatar.png"/>
      </div>
      <div class="flex flex-col items-stretch text-left ml-3">
          <div class="flex flex-row justify-between items-center">
              <p class="font-bold text-lg">{{ name }}</p>
              <p>{{ time }}</p>
          </div>
          <p>{{ last_chat }}.</p>
      </div>
    </div>
    <div v-if="is_selected" class="container-selected flex flex-row p-4 px-6 items-center rounded-xl">
      <div class="w-24">
          <img src="../../assets/avatar.png"/>
      </div>
      <div class="flex flex-col items-stretch text-left ml-3">
          <div class="flex flex-row justify-between items-center">
              <p class="font-bold text-lg">{{ name }}</p>
              <p>{{ time }}</p>
          </div>
          <p>{{ last_chat }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    time: String,
    last_chat: String,
    is_selected: Boolean
  },
  components: {

  },
};
</script>

<style scoped lang="scss">
.container {
  box-shadow: 0px 4px 20px #c7e0ff;
}

.container-selected {
  background: #E5F1FF;
  box-shadow: 0px 4px 20px #c7e0ff;
}

.search-box {
  border: 1px solid #8CB9FD;
}
</style>
