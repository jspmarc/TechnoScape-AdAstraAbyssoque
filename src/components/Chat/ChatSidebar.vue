<template>
  <div class="mr-3">
    <div class="flex flex-col items-start">
      <p class="text-4xl font-bold">Chats</p>
      <p>Sort by: Time received</p>
      <div
        class="item-container mt-2"
        v-for="(item, index) in searchResult"
        :key="index"
      >
        <div v-if="index=1" class="my-2">
            <ChatSidebarItem
                :name="item.name"
                :time="item.time"
                :last_chat="item.last_chat"
                :is_selected="item.is_selected"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatSidebarItem from "./ChatSidebarItem";
import data from "../../data/chatAccount.json";

export default {
  components: { 
    ChatSidebarItem
  },
  computed: {
    searchResult() {
      return data;
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  width: 400px;
  box-shadow: 0px 4px 20px #c7e0ff;
  text-align: center;
}

.search-input {
  background: transparent;
  border: none;
  background: #e5f1ff;
  color: #8cb9fd;
  max-width: 115px;
}

.search-input::placeholder {
  color: #8cb9fd;
  text-align: right;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    color: #171123;
}

.icon-star {
  color: #FFCD17;
}

.icon-virus {
  color: #42E0C9;
}

.filter-button {
  background: #2759AA;
}
</style>
