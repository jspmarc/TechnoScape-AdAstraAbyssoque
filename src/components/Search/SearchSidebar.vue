<template>
  <div class="container rounded-xl p-6">
    <div class="flex flex-row justify-between">
      <p>Filter</p>
      <p>Reset Filter</p>
    </div>
    <div class="flex mt-5 flex-col">
      <p class="text-left">Price range</p>
      <input type="range" min="1" max="100" value="50" class="mt-2" />
      <div class="mt-3 flex justify-between">
        <input type="text" class="search-input px-3" placeholder="2.000.000" />
        -
        <input type="text" class="search-input px-3" placeholder="20.000.000" />
      </div>
    </div>
    <div class="flex mt-5 flex-col items-start">
      <p>Rating</p>
      <div class="flex flex-row items-center my-2">
        <input
          type="radio"
          name="rating"
          value="5"
          class="mr-2"
        />
        <ReviewStars :count="5" />
      </div>
      <div class="flex flex-row items-center my-1">
        <input
          type="radio"
          name="rating"
          value="4"
          class="mr-2"
        />
        <ReviewStars :count="4" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input
          type="radio"
          name="rating"
          value="3"
          class="mr-2"
        />
        <ReviewStars :count="3" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input
          type="radio"
          name="rating"
          value="2"
          class="mr-2"
        />
        <ReviewStars :count="2" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input
          type="radio"
          name="rating"
          value="1"
          class="mr-2"
        />
        <ReviewStars :count="1" />
        <p class="ml-2">and above</p>
      </div>
    </div>
    <div class="flex mt-5 flex-col items-start">
      <p>Staycation Type</p>
      <div class="flex flex-row items-center my-1">
        <input type="checkbox" name="type" value="villa" />
        <p class="ml-2">Villa</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="checkbox" name="type" value="etc" />
        <p class="ml-2">Etc.</p>
      </div>
    </div>
    <div class="flex mt-5 flex-col items-start">
      <p>Facilities</p>
      <div class="flex flex-row items-center my-1">
        <input type="checkbox" name="facilities" value="pool" />
        <p class="ml-2">Swimming Pool</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="checkbox" name="facilities" value="etc" />
        <p class="ml-2">Etc.</p>
      </div>
    </div>
    <div class="flex mt-5 flex-col items-start">
      <p>COVID-19 Safety Rating</p>
      <div class="flex flex-row items-center my-2">
        <input type="radio" name="covid" value="5" />
        <font-awesome-icon icon="shield-virus" class="icon-virus ml-2" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="radio" name="covid" value="4" />
        <font-awesome-icon icon="shield-virus" class="icon-virus ml-2" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="radio"  name="covid" value="3" />
        <font-awesome-icon icon="shield-virus" class="icon-virus ml-2" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="radio" name="covid" value="2" />
        <font-awesome-icon icon="shield-virus" class="icon-virus ml-2" />
        <font-awesome-icon icon="shield-virus" class="icon-virus" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-1">
        <input type="radio" name="covid" value="1" />
        <font-awesome-icon icon="shield-virus" class="icon-virus ml-2" />
        <p class="ml-2">and above</p>
      </div>
      <div class="flex flex-row items-center my-2">
        <input type="radio" name="covid" value="1" />
        <p class="ml-2">Not rated</p>
      </div>
    </div>
    <div class="mt-5">
      <button class="rounded-2xl filter-button text-white px-4 py-1">
        Apply Filter
      </button>
    </div>
  </div>
</template>

<script>
import ReviewStars from "../ReviewStars.vue";
export default {
  components: {
    ReviewStars,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 400px;
  box-shadow: 0px 4px 20px #c7e0ff;
  text-align: center;
}

.search-input {
  background: transparent;
  border: none;
  background: #e5f1ff;
  color: #8cb9fd;
  max-width: 115px;
}

.search-input::placeholder {
  color: #8cb9fd;
  text-align: right;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  color: #171123;
}

.icon-star {
  color: #ffcd17;
}

.icon-virus {
  color: #42e0c9;
}

.filter-button {
  background: #2759aa;
}
</style>
