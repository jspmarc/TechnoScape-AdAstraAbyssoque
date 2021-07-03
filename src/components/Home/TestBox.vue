<template>
    <div class="test-box-container p-20">
        <p class="text-2xl mb-4 font-bold text-center text-white">Where do you want to stay?</p>
        <div class="flex flex-row justify-center items-center mb-16">
            <p class="mr-3 text-white">Don’t know where to stay?</p>
            <button class="ml-3 text-white bg-white button p-2 rounded-3xl px-4">Take this test to find out!</button>
        </div>
        <div class="flex flex-row justify-center bg-white h-96 rounded-2xl">

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test-box-container {
    background-image: linear-gradient(#2759AA, #2759AA, #FCFEFF);
}

.button {
    color: #2759AA;
    box-shadow: 0px 1px 5px #FCFEFF;
}
</style>
