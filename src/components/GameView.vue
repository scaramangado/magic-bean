<script setup lang="ts">import { getCategoriesForGame } from '../speedruncom/client';
import CategoryDisplay from './CategoryDisplay.vue';
import { useStore } from "../stores/filterStore";
import Fuse from "fuse.js";
import { computed } from 'vue';
import { Category } from '../model/appTypes';

export interface GameViewProps {
  gameId: string;
}

const props = defineProps<GameViewProps>();
const store = useStore();

const allCategories = await getCategoriesForGame(props.gameId);

const categories = new Fuse<Category>(allCategories, {
  minMatchCharLength: 0,
  findAllMatches: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: [{
    name: "categoryName",
    getFn: c => c.categoryName,
  }],
});

const filteredCategories = computed(
  () => (store.filterString === "" && allCategories) || categories.search(store.filterString).map(r => r.item)
);

</script>

<template>
  <div id="category-list">
    <CategoryDisplay v-for="category in filteredCategories" :category-info="category" />
  </div>
</template>

<style scoped>
#category-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 0.5rem 0.5rem;
}
</style>
