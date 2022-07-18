<script setup lang="ts">import { ref } from 'vue';
import { useStore } from "../stores/filterStore";

const store = useStore();

const onChange = (e: any) => store.setFilter(e.target.value)
</script>

<template>
  <input class="filter" :value="store.filterString" @input="onChange" placeholder="Filter..." />
</template>

<style scoped>
.filter {
  margin-left: auto;
  margin-right: 0.5rem;
}

.filter:focus {
  outline: none;
}

.filter::placeholder {
  color: var(--secondary-text);
}

@media only screen and (max-width: 479px) {
  .filter {
    visibility: hidden;
  }
}
</style>