<template>
  <div class="container">
      <h3 class="inter-semi text-center text-xl">
        Available Room(s)
      </h3>
      <div class="check-in mt-8">
        <label for="check-in-time" class="text-lg">Check-in</label>
        <div class="input-container input-bg">
          <font-awesome-icon class="icon" icon="calendar"/>
          <input type="date" id="check-in-time"
            class="input w-full ml-4"
            name="check-in-time"
            v-model="checkIn"
            :min="now"
          />
        </div>
      </div>
      <div class="duration mt-4">
        <label for="duration" class="text-lg">Duration</label>
        <div class="input-container input-bg">
          <font-awesome-icon icon="moon" class="icon" />
          <select class="input-select w-full ml-4" name="duration" v-model="duration">
            <option v-for="option in durationOptions" :value="option.value" :key="option.value">
              {{option.text}}
            </option>
          </select>
        </div>
      </div>
      <div class="check-out mt-4">
        <p class="text-lg">Check-out</p>
        <div class="input-container input-bg">
          <font-awesome-icon class="icon" icon="calendar"/>
          <span class="w-full ml-4">
            {{ checkOut() }}
          </span>
        </div>
      </div>
      <div class="guests-and-rooms mt-4">
        <label for="check-in-time" class="text-lg">Guests and Rooms</label>
        <div class="gnr input-bg">
          <div class="guests flex mt-1 mb-5">
            <font-awesome-icon class="icon" icon="user"/>
            <div class="input-num">
              <span class="ml-4">
                Guest(s)
              </span>
              <div class="flex">
                <font-awesome-icon class="icon icon-qty" icon="minus-circle"
                  @click="decGuest()" />
                <input type="text" name="guestQty" id="guestQty" v-model="guestQty"
                  class="w-8 amount input" />
                <font-awesome-icon class="icon icon-qty mr-3" icon="plus-circle"
                  @click="addGuest()" />
              </div>
            </div>
          </div>
          <div class="rooms flex">
            <font-awesome-icon class="icon" icon="door-open"/>
            <div class="input-num">
              <span class="ml-4">
                Room(s)
              </span>
              <div class="flex">
                <font-awesome-icon class="icon icon-qty" icon="minus-circle"
                  @click="decRoom()" />
                <input type="text" name="roomQty" id="roomQty" v-model="roomQty"
                  class="w-8 amount input" />
                <font-awesome-icon class="icon icon-qty mr-3" icon="plus-circle"
                  @click="addRoom()" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div v-for="(room, idx) in rooms" :key="idx">
          <RoomType v-bind="room" />
        </div>
      </div>
      <div class="input-container input-bg mt-8">
        <select class="input-select w-full ml-4" name="duration" v-model="chosenRoom">
          <option value="" style="hidden: hidden" disabled>Choose a room type</option>
          <option v-for="room in roomOptions" :value="room" :key="room">
            {{ room }}
          </option>
        </select>
      </div>
      <div class="buttons mt-8">
        <input
          type="button"
          @click="$emit('book')"
          value="Book"
          class="book rounded-2xl w-full py-2" />
        <input
          type="button"
          @click="$emit('nego')"
          value="Negotiate"
          class="nego rounded-2xl mt-2 w-full py-2" />
      </div>
      <div class="footer flex justify-around mt-4">
        <div class="cursor-pointer">
          <font-awesome-icon class="icon icon-qty" icon="comment-alt" /> Chat
        </div>
        <div class="cursor-pointer">
          <font-awesome-icon class="icon icon-qty" icon="share-alt" /> Share
        </div>
      </div>
  </div>
</template>

<script>
import RoomType from '../Details/RoomType.vue';

export default {
  components: {
    RoomType,
  },
  data() {
    return {
      checkIn: new Date().toISOString().substr(0, 10),
      duration: 1,
      durationOptions: [
        { text: '1 night', value: 1 },
        { text: '2 nights', value: 2 }
      ],
      guestQty: 1,
      roomQty: 1,
      chosenRoom: "",
    };
  },
  props: {
    rooms: Array,
  },
  methods: {
    checkOut() {
      const toRet = new Date(this.checkIn);
      toRet.setDate(toRet.getDate() + this.duration);
      return toRet.toISOString().substr(0, 10);
    },
    addRoom() {
      if (this.roomQty < 999) this.roomQty += 1;
    },
    decRoom() {
      if (this.roomQty > 1) this.roomQty -= 1;
    },
    addGuest() {
      if (this.guestQty < 999) this.guestQty += 1;
    },
    decGuest() {
      if (this.guestQty > 1) this.guestQty -= 1;
    }
  },
  computed: {
    now() {
      return new Date().toISOString().substr(0, 10);
    },
    roomOptions() {
      const res = [];
      for (const room of this.rooms) {
        console.log(room);
        if (room.available > 0) res.push(room.name);
      }

      console.log(res);
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 1rem;
  box-shadow: 0px 4px 20px #C7E0FF;
  padding: 1rem 2rem;
  color: var(--black);
  font-size: 1rem;

  .icon {
    color: #8cb9fd;
    width: 1rem;
    height: auto;
  }

  .icon-qty {
    cursor: pointer;
    color: #2759AA;
  }

  .input-bg {
    background: #e5f1ff;
    color: var(--black);
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;

    input:focus,
    select:focus {
      outline: none;
    }
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    background: transparent;
    border: none;

    &::placeholder {
      color: #8cb9fd;
    }

    &-select {
      background: transparent;
      border: none;
    }

    &::-moz-focus-inner,
    &::-moz-focus-outer,
    &:-moz-focusring,
    &:focus {
      outline: none;
      border: none;
    }
  }

  .input-select {
    background: transparent;
    border: none;
  }

  .gnr {
    width: 100%;

    .amount {
      margin: 0 1rem;
      background-color: #8cb9fd;
      border-radius: 0.3rem;
      text-align: center;
    }

    .input-num {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .buttons {
    .book {
      background-color: #2759AA;
      color: var(--white);
      cursor: pointer;
    }

    .nego {
      background-color: var(--white);
      color: #053267;
      border: 1px solid #8CB9FD;
      cursor: pointer;
    }
  }
}
</style>
