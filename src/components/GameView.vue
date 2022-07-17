<script setup lang="ts">import { getCategoriesForGame } from '../speedruncom/client';
import CategoryDisplay from './CategoryDisplay.vue';

export interface GameViewProps {
  gameId: string;
}

const props = defineProps<GameViewProps>();

const categories = await getCategoriesForGame(props.gameId);

</script>

<template>
  <div id="category-list">
    <CategoryDisplay v-for="category in categories" :category-info="category" />
  </div>
</template>

<style scoped>
#category-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 .5rem .5rem;
}
</style>
