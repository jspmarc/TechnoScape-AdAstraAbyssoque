<template>
  <div>
    <div class="search-box mr-5">
      <font-awesome-icon icon="search" class="icon" />
      <input
        type="text"
        class="search-input"
        ref="search"
        placeholder="Search your vacation ..."
        v-model="inputQuery"
        v-on:keyup.enter="onSearchSubmit"
      />
      <p v-if="query">
        Showing results for: "<span style="color:#C22929">{{ query }} </span>"
      </p>
    </div>
    <div class="result-list">
      <ResultList />
    </div>
  </div>
</template>

<script>
import ResultList from "../components/Search/ResultList.vue";

export default {
  data() {
    return {
      inputQuery: this.$store.state.query,
    };
  },
  computed: {
    query() {
      return this.$store.state.query;
    },
  },
  methods: {
    onSearchSubmit() {
      this.$store.commit("SET_QUERY", this.inputQuery);
      this.$store.commit("SET_QUERYNAV", "");
    },
    setFocus() {
      this.$refs.search.focus();
    },
  },
  mounted() {
    this.setFocus();
  },
  components: {
    ResultList,
  },
};
</script>

<style scoped lang="scss"></style>
