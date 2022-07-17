<script setup lang="ts">
import GameView from './GameView.vue';
import { oot } from "../speedruncom/model";

const gameId = oot;

</script>

<template>
  <GameView :game-id="gameId" />
</template>
