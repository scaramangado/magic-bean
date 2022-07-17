<script setup lang="ts">import { calculateCutoff, formatDuration } from '../durations/durationTools';
import { Category } from '../model/appTypes';
import { getWorldRecord } from '../speedruncom/client';

export interface CategoryLineProps {
  categoryInfo: Category;
}

const props = defineProps<CategoryLineProps>();

const wr = await getWorldRecord(props.categoryInfo);
const cutoff = calculateCutoff(wr);

const displayedWr = formatDuration(wr);
const displayedCutoff = formatDuration(cutoff);

</script>

<template>
  <section class="category">
    <p class="name">{{ props.categoryInfo.categoryName }}</p>
    <b>10% Cutoff</b> {{ displayedCutoff }}&emsp;<b>WR</b> {{ displayedWr }}
  </section> 
</template>

<style scoped>
.category {
  color: var(--primary-text);
  background-color: rgba(0, 0, 0, 0.2);
  margin: .5rem 1rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
}

.name {
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: block;
}
</style>
