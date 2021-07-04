<template>
  <div class="container">
      <h3 class="inter-semi text-center">
        Available Room(s)
      </h3>
      <div class="check-in">
        <label for="check-in-time">Check-in</label>
        <div class="input-container">
          <font-awesome-icon icon="calendar" class="icon" />
          <input type="datetime-local" id="check-in-time"
          class="input w-full"
            name="check-in-time" value="2021-07-05T12:00" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 1rem;
  box-shadow: 0px 4px 20px #C7E0FF;
  padding: 1rem 1.5rem;

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #e5f1ff;
    color: #8cb9fd;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;

    .input {
      background: transparent;
      border: none;
      margin-left: 1rem;

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
        border: none;
      }
    }
  }

  .check-in {
    margin-top: 0.5rem;
  }
}
</style>