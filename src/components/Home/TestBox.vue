<template>
  <div class="test-box-container p-20">
    <div class="title-container">
      <p class="text-3xl mb-4 font-bold text-center text-white inter-bold">
        Where do you want to stay?
      </p>
      <div class="flex flex-row justify-center items-center mb-16">
        <p class="mr-3 text-white text-xl">Don’t know where to stay?</p>
        <button
          class="ml-3 text-white bg-white button p-2 rounded-3xl px-4 text-xl inter"
          @click="showModal = true"
        >
          Take this test to find out!
        </button>
      </div>
      <RecommendationTest v-if="showModal" @close="showModal = false" />
    </div>
    <div class="flex flex-col justify-center bg-white rounded-2xl p-20">
      <p class="text-xl">Destination</p>
      <div class="search-box px-3 flex items-center rounded-lg">
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
          <div class="search-box px-3 flex items-center rounded-lg">
            <font-awesome-icon icon="calendar" class="icon" />
            <input
              type="date"
              class="search-input w-full"
              placeholder="Insert your check-in date ..."
            />
          </div>
        </div>
        <div>
          <p class="text-xl">Duration</p>
          <div class="search-box px-3 flex items-center rounded-lg">
            <font-awesome-icon icon="moon" class="icon" />
            <select class="search-input-select w-full ml-1">
              <option>1 night</option>
            </select>
          </div>
        </div>
        <div>
          <p class="text-xl">Check-out</p>
          <div class="search-box px-3 flex items-center rounded-lg">
            <font-awesome-icon icon="calendar" class="icon w-full" />
            <input
              type="date"
              class="search-input w-full"
              placeholder="Insert your check-out date ..."
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-8 items-end">
        <div class="dropdown">
          <p class="text-xl">Guests and Rooms</p>
          <div
            class="search-box px-3 flex items-center rounded-lg justify-between"
          >
            <font-awesome-icon icon="person-booth" class="icon" />
            <font-awesome-icon
              icon="chevron-down"
              class="icon"
              @click="showGuest = true"
            />
          </div>
          <div
            v-if="showGuest"
            class="absolute grid grid-cols-3 gap-8 pr-80 w-full overflow-x-hidden"
          >
            <div class="px-3 py-3 expand-container rounded-lg flex flex-col">
              <div class="flex justify-between items-center">
                <div class="flex flex-row items-center">
                  <font-awesome-icon icon="person-booth" class="person-icon" />
                  <p class="ml-2">Guest(s)</p>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon
                    icon="minus-circle"
                    class="quantity-button"
                    @click="decreaseQuantityGuest()"
                  />
                  <p class="w-12 text-center">{{ guest }}</p>
                  <font-awesome-icon
                    icon="plus-circle"
                    class="quantity-button"
                    @click="increaseQuantityGuest()"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center mt-6">
                <div class="flex flex-row items-center">
                  <font-awesome-icon icon="person-booth" class="person-icon" />
                  <p class="ml-2">Room(s)</p>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon
                    icon="minus-circle"
                    class="quantity-button"
                    @click="decreaseQuantityRoom()"
                  />
                  <p class="w-12 text-center">{{ room }}</p>
                  <font-awesome-icon
                    icon="plus-circle"
                    class="quantity-button"
                    @click="increaseQuantityRoom()"
                  />
                </div>
              </div>
              <p class="mt-6 text-right done-text" @click="showGuest = false">
                Done
              </p>
            </div>
          </div>
        </div>
        <div />
        <div class="flex flex-col">
          <button class="button-blue p-2 rounded-3xl inter" @click="onSearch">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendationTest from "../Home/RecommendationTest.vue";

export default {
  components: {
    RecommendationTest,
  },
  data() {
    return {
      showModal: false,
      showGuest: false,
      guest: 1,
      room: 1,
    };
  },
  methods: {
    increaseQuantityGuest() {
      this.guest++;
    },
    decreaseQuantityGuest() {
      if (this.guest > 1) {
        this.guest--;
      }
    },
    increaseQuantityRoom() {
      this.room++;
    },
    decreaseQuantityRoom() {
      if (this.room > 1) {
        this.room--;
      }
    },
    onSearch() {
      this.$router.push({ path: "/search" });
    },
  },
};
</script>

<style lang="scss" scoped>
.test-box-container {
  background-image: linear-gradient(#2759aa, #2759aa, #fcfeff);

  .title-container {
    height: 24vh;
  }
}

.search-box {
  background: #e5f1ff;
  color: #8cb9fd;
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
  color: #2759aa;
  box-shadow: 0px 1px 5px #fcfeff;
}

.button-blue {
  color: #fcfeff;
  background-color: #2759aa;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  color: #171123;
}

.expand-container {
  background-color: #c7e0ff;
}

.quantity-button {
  color: #2759aa;
}

.quantity-button:hover {
  cursor: pointer;
}

.person-icon {
  color: #2759aa;
}

.done-text {
  color: #2759aa;
}

.done-text:hover {
  cursor: pointer;
}

.dropdown {
  overflow-x: hidden;
  transition-duration: 0.5s;
}
</style>
