<template>
  <!-- Source: https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component -->
  <!-- Modal -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          :style="step === 1 ? 'height: 95vh' : 'height: 55vh'"
        >
          <button class="modal-default-button" @click="onClose">
            <font-awesome-icon icon="times" />
          </button>

          <!-- body -->
          <Content v-if="step == 1" @onNext="nextPage" />
          <ContentBudget v-if="step == 2" @onNext="nextPage" />
          <ContentForm v-if="step == 3" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Content from "./Content.vue";
import ContentForm from "./ContentForm.vue";
import ContentBudget from "./ContentBudget.vue";

export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    nextPage() {
      this.step += 1;
    },
    onClose() {
      this.$store.commit("RESET_RECANS");
      this.$emit("close");
    },
  },
  components: {
    Content,
    ContentForm,
    ContentBudget,
  },
};
</script>

<style scoped>
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
