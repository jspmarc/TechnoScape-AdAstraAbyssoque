<template>
  <div class="flex flex-col items-stretch w-full container rounded-2xl mt-6">
    <div class="px-8 py-3 name-container">
        <p class="text-lg font-bold">Jono Do</p>
    </div>
    <div class="chat-container px-8">
      <div v-for="(item, index) in message" :key="index">
        <ChatCard
            :chat="item.chat"
            :time="item.time"
            :isSelf="item.isSelf"
        />
      </div>
    </div>
    <div class="search-box flex rounded-2xl mx-8 px-4">
        <font-awesome-icon icon="paperclip" class="icon" />
        <input
            type="text"
            class="search-input mx-3 w-full"
            placeholder="Your message"
            v-model="chat"
            v-on:keyup.enter="addData"
        />
        <font-awesome-icon icon="paper-plane" class="icon ml-auto" @click="addData"/>
    </div>
  </div>
</template>

<script>
import ChatCard from "./ChatCard.vue";
import data from "../../data/chatHistory.json";
export default {
  components: {
    ChatCard
  },
  methods: {
    addData() {
        if(this.chat != "") {
            this.message.push({"chat": this.chat, "time": "12.43", "isSelf": true})
            this.chat = ""
        }
    }
  },
  data() {
    return {
      message: data,
      chat: ""
    };
  },
}
</script>

<style scoped lang="scss">
.container {
    background: #E5F1FF;
    height: 650px;
}

.name-container {
    border-bottom: 3px solid #8CB9FD;
}

.search-box {
  display: flex;
  align-items: center;
  background: #FCFEFF;
  color: #FCFEFF;
  height: 50px;
  box-shadow: 0px 4px 20px #c7e0ff;
}

.chat-container {
    height: 525px;
    overflow: auto;
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

.icon:hover {
    cursor: pointer;
}

.chat-card-left {
    background: #FCFEFF;
}

.chat-card-right {
    background: #2759AA;
    color: #FCFEFF;
}
</style>
