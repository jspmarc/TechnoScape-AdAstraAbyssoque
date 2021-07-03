<template>
  <div>
    <div class="search-input-box mr-5">
      <font-awesome-icon icon="search" class="icon" />
      <input
        type="text"
        class="search-input"
        ref="search"
        placeholder="Your next stay..."
        v-model="inputQuery"
        v-on:keyup.enter="onSearchSubmit"
      />
    </div>
    <div class="search-body">
      <SearchSidebar />
      <SearchList />
    </div>
  </div>
</template>

<script>
import SearchList from "../components/Search/SearchList.vue";
import SearchSidebar from "../components/Search/SearchSidebar.vue";

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
    SearchList,
    SearchSidebar,
  },
};
</script>

<style scoped lang="scss">
.search-input-box {
  background: #e5f1ff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #8cb9fd;
  border-radius: 5px;
  width: 80%;
  height: 50px;
  margin: 30px auto;

  .search-input {
    background: transparent;
    border: none;
    margin-left: 5px;
    width: 90%;

    &::placeholder {
      color: #8cb9fd;
    }

    &:focus {
      outline: none;
      color: #000;
    }
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    color: #171123;
  }
}

.search-body {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
}
</style>
