<template>
  <div v-if="tagType === 'accomodation'" class="tag accomodation-tag">
    {{content}}
  </div>
  <div v-else-if="tagType === 'setting'" class="tag setting-tag">
    {{content}}
  </div>
  <div v-else-if="tagType === 'negotiation'" class="tag negotiation-tag">
    Negotiable
  </div>
  <div v-else class="bad-tag">
    Bad tag type
  </div>
</template>

<script>
export default {
  props: {
    tagType: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0 0.25rem 0 0;
  color: var(--white);
}

.accomodation-tag {
  background-color: #2759AA;
}

.negotiation-tag {
  background-color: #8CB9FD;
}

.setting-tag {
  background-color: #1B9D84;
}
</style>