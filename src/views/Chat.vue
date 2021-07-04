<template>
      <div class="container flex flex-row py-10">
        <ChatSidebar/>
        <ChatMain/>
      </div>
</template>

<script>
import ChatSidebar from "../components/Chat/ChatSidebar.vue";
import ChatMain from "../components/Chat/ChatMain.vue";

export default {
  components: {
    ChatSidebar,
    ChatMain
  },
};
</script>

<style scoped>
.container {
    width: 80%;
    margin: auto;
}
</style>
