<template>
  <!-- Source: https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component -->
  <!-- Modal -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="content flex items-center">
            <img
              class="success-image mb-5 mt-5"
              src="../../assets/dialog-success.png"
            />
            <p class="inter">You have successfully purchased the ticket!</p>
            <button class="mt-5" @click="onClick">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    onClick() {
      this.$router.push({ path: "/" });
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.content {
  width: 200px;
  flex-direction: column;
  text-align: center;

  .success-image {
    width: 90px;
    height: 90px;
  }

  button {
    color: #fff;
    background: #1c934c;
    width: 100px;
    height: 40px;
    border-radius: 5px;
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;

  width: fit-content;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fcfeff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  color: hsl(217, 63%, 41%);
  font-size: 1.5rem;
  align-self: flex-end;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
