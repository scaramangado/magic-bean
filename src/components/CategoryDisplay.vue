<script setup lang="ts">
import { computed, ref } from "vue";
import { Duration } from "luxon";
import { calculateCutoff, formatDuration } from "../durations/durationTools";
import { Category } from "../model/appTypes";
import { getWorldRecord } from "../speedruncom/client";

export interface CategoryLineProps {
  categoryInfo: Category;
}

const props = defineProps<CategoryLineProps>();

const wr = ref<Duration | undefined>(undefined);

try {
  wr.value = await getWorldRecord(props.categoryInfo);
} catch (e: unknown) {
  console.error(
    `Failed to download WR for category '${props.categoryInfo.categoryName}'`,
  );
}

const cutoff = computed(() => wr.value && calculateCutoff(wr.value));

const displayedWr = computed(() => wr.value && formatDuration(wr.value) || "??:??:??");
const displayedCutoff = computed(() => cutoff.value && formatDuration(cutoff.value) || "??:??:??");

</script>

<template>
  <section class="category">
    <p class="name">{{ props.categoryInfo.categoryName }}</p>
    <span class="cutoff">
      <b>{{ displayedCutoff }}</b>
    </span>
    <span class="wr">
      WR
      <b>{{ displayedWr }}</b>
    </span>
  </section>
</template>

<style scoped>
.category {
  --margin: 0.3rem;
  --padding: 0.6rem;
  width: calc(50% - 2 * var(--margin) - 2 * var(--padding));
  color: var(--primary-text);
  background-color: rgba(0, 0, 0, 0.2);
  margin: var(--margin);
  padding: var(--padding);
  border-radius: 0.3rem;
}

@media only screen and (max-width: 479px) {
  .category {
    width: 100%;
  }
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
