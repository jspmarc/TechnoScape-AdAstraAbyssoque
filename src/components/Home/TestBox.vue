<template>
    <div class="test-box-container p-20">
        <p class="text-3xl mb-4 font-bold text-center text-white">Where do you want to stay?</p>
        <div class="flex flex-row justify-center items-center mb-16">
            <p class="mr-3 text-white text-xl">Don’t know where to stay?</p>
            <button class="ml-3 text-white bg-white button p-2 rounded-3xl px-4 text-xl">Take this test to find out!</button>
        </div>
        <div class="flex flex-col justify-center bg-white rounded-2xl p-20">
            <p class="text-xl">Destination</p>
            <div class="search-box flex items-center">
                <font-awesome-icon icon="map-marker-alt" class="icon" />
                <input
                    type="text"
                    class="search-input"
                    placeholder="Search your vacation ..."
                />
            </div>
            <div class="grid grid-cols-3 gap-8 my-8">
                <div>
                    <p class="text-xl">Check-in</p>
                    <div class="search-box flex items-center">
                        <font-awesome-icon icon="calendar" class="icon" />
                        <input
                            type="text"
                            class="search-input"
                            placeholder="Search your vacation ..."
                        />
                    </div>
                </div>
                <div>
                    <p class="text-xl">Duration</p>
                    <div class="search-box flex items-center">
                        <font-awesome-icon icon="moon" class="icon" />
                        <select class="search-input-select w-full ml-1">
                            <option>1 night</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p class="text-xl">Check-out</p>
                    <div class="search-box flex items-center">
                        <font-awesome-icon icon="calendar" class="icon" />
                        <input
                            type="text"
                            class="search-input"
                            placeholder="Search your vacation ..."
                        />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8 items-end">
                <div>
                    <p class="text-xl">Guests and Rooms</p>
                    <div class="search-box flex items-center justify-between">
                        <font-awesome-icon icon="person-booth" class="icon" />
                        <select class="search-input-select w-full ml-1">
                            <option>1 night</option>
                        </select>
                    </div>
                </div>
                <div>
                    
                </div>
                <div class="flex flex-col">
                    <button class="button-blue p-2 rounded-3xl">SEARCH</button>
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
    background-image: linear-gradient(#2759AA, #2759AA, #FCFEFF);
}

.search-box {
  background: #e5f1ff;
  padding: 0 10px;
  color: #8cb9fd;
  border-radius: 5px;
  height: 38px;
}

.search-input {
  background: transparent;
  border: none;
  margin-left: 10px;
}

.search-input-select {
  background: transparent;
  border: none; 
}

.search-input::placeholder {
  color: #8cb9fd;
}

.button {
    color: #2759AA;
    box-shadow: 0px 1px 5px #FCFEFF;
}

.button-blue {
    color: #FCFEFF;
    background-color: #2759AA;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  color: #171123;
}
</style>
