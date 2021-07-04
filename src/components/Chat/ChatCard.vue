<template>
    <div>
        <div v-if="!isSelf" class="my-4 p-4 w-7/12 chat-card-left rounded-tl-2xl rounded-r-2xl">
            <div class="grid grid-cols-6 items-end justify-end">
                <p class="col-span-5">
                    {{ chat }}
                </p>
                <p class="text-right ml-auto">
                    {{ time }}
                </p>
            </div>
        </div>
        <div class="my-4 p-4 w-7/12 chat-card-right rounded-tr-2xl rounded-l-2xl ml-auto">
            <div class="grid grid-cols-6 items-end justify-end">
                <p class="col-span-5">
                    {{ chat }}
                </p>
                <p class="text-right ml-auto">
                    {{ time }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        chat: String,
        time: String,
        isSelf: Boolean
    },
}
</script>

<style scoped lang="scss">
.search-box {
  display: flex;
  align-items: center;
  background: #FCFEFF;
  color: #FCFEFF;
  height: 50px;
  box-shadow: 0px 4px 20px #c7e0ff;
}

.chat-container {
    height: 575px;
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

.chat-card-left {
    background: #FCFEFF;
}

.chat-card-right {
    background: #2759AA;
    color: #FCFEFF;
}
</style>
