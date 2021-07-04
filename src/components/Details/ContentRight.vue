<template>
  <div class="container">
      <h3 class="inter-semi text-center">
        Available Room(s)
      </h3>
      <div class="check-in mt-4">
        <label for="check-in-time" class="text-xl">Check-in</label>
        <div class="input-container">
          <font-awesome-icon class="icon" icon="calendar"/>
          <input type="date" id="check-in-time"
            class="input w-full ml-4"
            name="check-in-time"
            v-model="checkIn"
            :min="now"
          />
        </div>
      </div>
      <div class="duration mt-3">
        <label for="duration" class="text-xl">Duration</label>
        <div class="input-container">
          <font-awesome-icon icon="moon" class="icon" />
          <select class="input-select w-full ml-4" name="duration" v-model="duration">
            <option v-for="option in durationOptions" :value="option.value" :key="option.value">
              {{option.text}}
            </option>
          </select>
        </div>
      </div>
      <div class="check-out mt-3">
        <p class="text-xl">Check-out</p>
        <div class="input-container">
          <font-awesome-icon class="icon" icon="calendar"/>
          <span class="w-full ml-4">
            {{ checkOut() }}
          </span>
        </div>
      </div>
      <div class="check-in mt-4">
        <label for="check-in-time" class="text-xl">Guests and Rooms</label>
        <div class="input-container">
          <font-awesome-icon class="icon" icon="calendar"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
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
    };
  },
  props: {
    description: String,
  },
  methods: {
    checkOut() {
      const toRet = new Date(this.checkIn);
      toRet.setDate(toRet.getDate() + this.duration);
      return toRet.toISOString().substr(0, 10);
    },
  },
  computed: {
    now() {
      return new Date().toISOString().substr(0, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 1rem;
  box-shadow: 0px 4px 20px #C7E0FF;
  padding: 1rem 1.5rem;
  color: var(--black);

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #e5f1ff;
    color: var(--black);
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;

    input:focus,
    select:focus {
      outline: none;
    }

    .icon {
      color: #8cb9fd;
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
  }
}
</style>