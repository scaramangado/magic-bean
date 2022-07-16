<script setup lang="ts">
import { ref } from 'vue';
import { downloadWorldRecord, getCategoriesForGame } from '../speedruncom/client';
import { oot } from "../speedruncom/model";

const data = ref<string>("");

async function load() {
  const categories = await getCategoriesForGame(oot);
  const any = categories.filter(c => c.categoryName === "Any%")[0];

  data.value = (await downloadWorldRecord(any)).toHuman();
}

load();

</script>

<template>
  <p class="test">{{ data }}</p>
</template>

<style scoped>
.test {
  color: white;
  padding: 0 20px 0;
}
</style>
