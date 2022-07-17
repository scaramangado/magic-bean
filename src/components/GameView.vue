<script setup lang="ts">import { getCategoriesForGame } from '../speedruncom/client';
import CategoryLine from './CategoryLine.vue';

export interface GameViewProps {
  gameId: string;
}

const props = defineProps<GameViewProps>();

const categories = await getCategoriesForGame(props.gameId);

</script>

<template>
  <CategoryLine v-for="category in categories" :category-info="category" />
</template>
