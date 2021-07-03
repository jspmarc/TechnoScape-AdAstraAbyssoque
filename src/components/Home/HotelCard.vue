<template>
    <div class="test-box-container grid grid-cols-2 gap-6">
        <div class="img-container h-48">

        </div>
        <div class="flex flex-col justify-center">
            <p class="font-bold text-3xl">Blah Blah Hotel</p>
            <div class="mt-2 flex flex-row">
                <div>
                    <p>
                        <span class="font-bold text-4xl letter-spacing">4.3</span>
                        <span>&nbsp;/&nbsp;5</span>
                    </p>
                    <div class="flex flex-row">
                        <font-awesome-icon icon="star" class="icon" />
                        <font-awesome-icon icon="star" class="icon" />
                        <font-awesome-icon icon="star" class="icon" />
                        <font-awesome-icon icon="star" class="icon" />
                        <font-awesome-icon icon="star" class="icon" />
                    </div>
                </div>
                <div class="w-3/4 ml-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test-box-container {
    background: #FCFEFF;
}

.button {
    color: #2759AA;
    box-shadow: 0px 1px 5px #FCFEFF;
}

.img-container {
    background: #9B9B9B;
}

.icon {
    
}

.letter-spacing {
    letter-spacing: 4px;
}
</style>
