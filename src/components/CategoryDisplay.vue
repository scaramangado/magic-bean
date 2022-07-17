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
    <span class="cutoff"><b>{{ displayedCutoff }}</b></span><span class="wr">WR <b>{{ displayedWr }}</b></span>
  </section> 
</template>

<style scoped>
.category {
  --margin: .3rem;
  --padding: .6rem;
  width: calc(50% - 2 * var(--margin) - 2 * var(--padding));
  color: var(--primary-text);
  background-color: rgba(0, 0, 0, 0.2);
  margin: var(--margin);
  padding: var(--padding);
  border-radius: 0.3rem;
}

.name {
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: block;
}

.cutoff {
  min-width: 8rem;
  display: inline-block;
}

.wr {
  color: var(--secondary-text);
}
</style>
