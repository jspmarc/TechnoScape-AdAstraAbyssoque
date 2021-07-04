<template>
  <div class="flex flex-col items-stretch w-full ml-3">
    <div class="search-box flex rounded-2xl px-4">
        <font-awesome-icon icon="search" class="icon" />
        <input
            type="text"
            class="search-input ml-3"
            placeholder="Search"
            v-model="queryNav"
            v-on:keyup.enter="onSearchSubmit"
        />
    </div>
    <ChatBox/>
  </div>
</template>

<script>
import ChatBox from "./ChatBox.vue";
export default {
  components: { 
    ChatBox
  },
  computed: {

  },
}
</script>

<style scoped lang="scss">
.search-box {
  display: flex;
  align-items: center;
  color: #8cb9fd;
  height: 50px;
  box-shadow: 0px 4px 20px #c7e0ff;
}

.search-input {
  background: transparent;
  border: none;
}

.search-input::placeholder {
  color: #2759AA;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  color: #171123;
}

.icon {
    color: #2759AA;
}
</style>
